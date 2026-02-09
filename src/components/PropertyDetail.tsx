import { Property } from '../types';
import { Bed, Bath, Maximize, MapPin, Phone, Mail, ArrowLeft, Check, Calendar, Share2, Heart, ShieldCheck, MessageCircle } from 'lucide-react';
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

  const whatsappLink = property.agent?.phone
    ? `https://wa.me/${property.agent.phone.replace(/\D/g, '')}`
    : 'https://wa.me/250785514692';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={onBack} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Properties
            </Button>
            <div className="flex gap-2">
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

      <div className="container mx-auto px-4 py-10">
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
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                      : 'bg-gray-500 text-white'
                  }
                >
                  {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                </Badge>
                <Badge variant="outline">{property.category.charAt(0).toUpperCase() + property.category.slice(1)}</Badge>
                <Badge variant="outline" className="gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  Verified Listing
                </Badge>
              </div>
            </div>

            {/* Property Details */}
            <Card className="mb-6 card-outline">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="mb-2">{property.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{property.location}, {property.district}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">
                      {property.type === 'rent' ? 'Monthly Rent' : 'Price'}
                    </p>
                    <h3 className="text-primary">{formatPrice(property.price)}</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/70 rounded-2xl">
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
                  <div className="grid grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h4 className="mb-3">Property Information</h4>
                  <div className="grid grid-cols-2 gap-4">
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

            <Card className="card-outline">
              <CardHeader>
                <CardTitle>Location & Neighborhood</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-2xl border border-border/60 bg-muted/60 p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Map Preview</p>
                    <p className="text-lg font-medium">{property.location}, {property.district}</p>
                    <p className="text-sm text-muted-foreground">Safe, walkable, and close to top schools and dining.</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent */}
            {property.agent && (
              <Card className="mb-6 sticky top-20 card-outline">
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
                      <div className="inline-flex items-center gap-1 mt-2 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                        <ShieldCheck className="h-3 w-3" />
                        Verified Professional
                      </div>
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
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`mailto:${property.agent.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Email Agent
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
