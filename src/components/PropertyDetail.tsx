import { Property } from '../types';
import { Bed, Bath, Maximize, MapPin, Phone, Mail, ArrowLeft, Check, Calendar, Share2, Heart, Video } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { ImageGallery } from './ImageGallery';
import { ScheduleViewingDialog } from './ScheduleViewingDialog';
import { toast } from 'sonner@2.0.3';
import { useState } from 'react';

interface PropertyDetailProps {
  property: Property;
  onBack: () => void;
}

export function PropertyDetail({ property, onBack }: PropertyDetailProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [scheduleDialogOpen, setScheduleDialogOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-RW', {
      style: 'currency',
      currency: 'RWF',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="property-detail-header-row flex items-center justify-between">
            <Button variant="ghost" onClick={onBack} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Properties
            </Button>
            <div className="property-detail-header-actions flex gap-2">
              <Button variant="outline" size="icon" onClick={handleFavorite}>
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button variant="outline" size="icon" onClick={handleShare}>
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-6">
              <ImageGallery images={property.images} title={property.title} />
              <div className="flex gap-2 mt-4 flex-wrap">
                <Badge className="bg-primary text-primary-foreground">
                  {property.type === 'rent' ? 'For Rent' : 'For Sale'}
                </Badge>
                <Badge 
                  variant="secondary"
                  className={
                    property.status === 'available' 
                      ? 'bg-green-500 text-white hover:bg-green-600' 
                      : 'bg-gray-500 text-white'
                  }
                >
                  {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                </Badge>
                <Badge variant="outline">{property.category.charAt(0).toUpperCase() + property.category.slice(1)}</Badge>
              </div>
            </div>

            {/* Property Details */}
            <Card className="mb-6">
              <CardHeader>
                <div className="property-detail-title-row flex items-start justify-between">
                  <div>
                    <CardTitle className="mb-2">{property.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{property.location}, {property.district}</span>
                    </div>
                  </div>
                  <div className="property-detail-price text-right">
                    <p className="text-sm text-muted-foreground mb-1">
                      {property.type === 'rent' ? 'Monthly Rent' : 'Price'}
                    </p>
                    <h3 className="text-primary">{formatPrice(property.price)}</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="property-detail-spec-grid grid grid-cols-3 gap-4 mb-6 p-4 bg-muted rounded-lg">
                  {property.category !== 'land' && (
                    <>
                      <div className="text-center">
                        <Bed className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <p className="text-sm text-muted-foreground">Bedrooms</p>
                        <p>{property.bedrooms}</p>
                      </div>
                      <div className="text-center">
                        <Bath className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <p className="text-sm text-muted-foreground">Bathrooms</p>
                        <p>{property.bathrooms}</p>
                      </div>
                    </>
                  )}
                  <div className="text-center">
                    <Maximize className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Area</p>
                    <p>{property.area} m²</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h4 className="mb-3">Description</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>

                <Separator className="my-6" />

                <div>
                  <h4 className="mb-3">Features & Amenities</h4>
                  <div className="property-detail-features-grid grid grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h4 className="mb-3">Property Information</h4>
                  <div className="property-detail-info-grid grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Type</p>
                      <p className="capitalize">{property.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Category</p>
                      <p className="capitalize">{property.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">District</p>
                      <p>{property.district}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Listed On</p>
                      <p>{new Date(property.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent */}
            {property.agent && (
              <Card className="mb-6 sticky top-20">
                <CardHeader>
                  <CardTitle>Contact Agent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <span className="text-xl">{property.agent.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p>{property.agent.name}</p>
                      <p className="text-sm text-muted-foreground">Property Agent</p>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${property.agent.phone}`} className="text-sm hover:text-primary">
                        {property.agent.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${property.agent.email}`} className="text-sm hover:text-primary">
                        {property.agent.email}
                      </a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full" asChild>
                      <a href={`tel:${property.agent.phone}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call Agent
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`mailto:${property.agent.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Message
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setScheduleDialogOpen(true)}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Viewing
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Schedule Viewing Dialog */}
      <ScheduleViewingDialog
        propertyTitle={property.title}
        open={scheduleDialogOpen}
        onOpenChange={setScheduleDialogOpen}
      />
    </div>
  );
}
