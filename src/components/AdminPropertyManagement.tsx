import { useState } from 'react';
import { Property } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Edit, Trash2, Eye, Plus, ArrowLeft, Search } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

interface AdminPropertyManagementProps {
  properties: Property[];
  onNavigate: (view: string) => void;
  onViewProperty: (id: string) => void;
  onEditProperty: (id: string) => void;
  onDeleteProperty: (id: string) => void;
}

export function AdminPropertyManagement({ 
  properties, 
  onNavigate, 
  onViewProperty,
  onEditProperty,
  onDeleteProperty 
}: AdminPropertyManagementProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [propertyToDelete, setPropertyToDelete] = useState<string | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-RW', {
      style: 'currency',
      currency: 'RWF',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getStatusBadgeClass = (status: Property['status']) => {
    if (status === 'available') return 'bg-green-500 text-white hover:bg-green-600';
    if (status === 'rented') return 'bg-yellow-500 text-white hover:bg-yellow-600';
    return 'bg-blue-500 text-white hover:bg-blue-600';
  };

  const formatStatus = (status: string) => status.charAt(0).toUpperCase() + status.slice(1);

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteClick = (id: string) => {
    setPropertyToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (propertyToDelete) {
      onDeleteProperty(propertyToDelete);
      setPropertyToDelete(null);
      setDeleteDialogOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between admin-header-row">
            <div>
              <Button 
                variant="ghost" 
                onClick={() => onNavigate('dashboard')}
                className="gap-2 mb-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
              <h1 className="mb-1">Property Management</h1>
              <p className="text-muted-foreground">Manage all your properties in one place</p>
            </div>
            <Button onClick={() => onNavigate('admin-add-property')} className="gap-2 w-full md:w-auto admin-header-cta">
              <Plus className="h-4 w-4" />
              Add New Property
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between admin-management-header">
              <CardTitle>All Properties ({filteredProperties.length})</CardTitle>
              <div className="w-full md:w-72 admin-search-wrap">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search properties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 bg-input-background"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 md:hidden">
              {filteredProperties.length === 0 ? (
                <div className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
                  No properties found
                </div>
              ) : (
                filteredProperties.map((property) => (
                  <div key={property.id} className="rounded-lg border p-3">
                    <div className="flex gap-3">
                      <img
                        src={property.images[0]}
                        alt={property.title}
                        className="h-20 w-24 shrink-0 rounded-md object-cover"
                      />
                      <div className="min-w-0 flex-1 space-y-1">
                        <p className="line-clamp-2">{property.title}</p>
                        <p className="text-sm text-muted-foreground line-clamp-1">{property.location}</p>
                        <p className="text-xs text-muted-foreground capitalize line-clamp-1">
                          {property.category} • {property.district}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="capitalize">
                            {property.type}
                          </Badge>
                          <Badge className={getStatusBadgeClass(property.status)}>
                            {formatStatus(property.status)}
                          </Badge>
                        </div>
                        <p className="text-sm break-words">{formatPrice(property.price)}</p>
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1 text-xs"
                        onClick={() => onViewProperty(property.id)}
                      >
                        <Eye className="h-3.5 w-3.5" />
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1 text-xs"
                        onClick={() => onEditProperty(property.id)}
                      >
                        <Edit className="h-3.5 w-3.5" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="col-span-2 gap-1 text-xs text-destructive hover:text-destructive"
                        onClick={() => handleDeleteClick(property.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Delete Property
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="hidden md:block rounded-md border admin-table-scroll">
              <Table className="min-w-[760px]">
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProperties.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        No properties found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredProperties.map((property) => (
                      <TableRow key={property.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={property.images[0]}
                              alt={property.title}
                              className="w-16 h-16 rounded object-cover"
                            />
                            <div>
                              <p className="line-clamp-1">{property.title}</p>
                              <p className="text-sm text-muted-foreground capitalize">{property.category}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{property.location}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
                            {property.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatPrice(property.price)}</TableCell>
                        <TableCell>
                          <Badge className={getStatusBadgeClass(property.status)}>
                            {formatStatus(property.status)}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              aria-label="View property"
                              onClick={() => onViewProperty(property.id)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              aria-label="Edit property"
                              onClick={() => onEditProperty(property.id)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              aria-label="Delete property"
                              onClick={() => handleDeleteClick(property.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the property from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
