import { Building2, Users, Award, TrendingUp, Shield, Clock, Home, Briefcase, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-white">Real Estate Service</h1>
          <div className="text-xl text-blue-100 max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-3">
              <Home className="h-6 w-6" />
              <p>Getting real about real estate</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Briefcase className="h-6 w-6" />
              <p>We are a professional real estate agency in Rwanda</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6" />
              <p>Just here for you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-lg">
              We're committed to simplifying the property search process and connecting people 
              with their ideal homes and investment opportunities across Kigali's diverse neighborhoods. 
              Getting real about real estate means providing honest, transparent, and professional service.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2 text-primary">250+</div>
                <p className="text-sm text-muted-foreground">Properties Listed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2 text-primary">150+</div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2 text-primary">10+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2 text-primary">24/7</div>
                <p className="text-sm text-muted-foreground">Customer Support</p>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Building2 className="h-12 w-12 text-primary mb-4" />
                  <h3 className="mb-2">Premium Properties</h3>
                  <p className="text-muted-foreground text-sm">
                    Carefully curated selection of high-quality properties across Kigali's prime locations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="mb-2">Expert Agents</h3>
                  <p className="text-muted-foreground text-sm">
                    Professional and knowledgeable agents dedicated to helping you find your perfect property.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="mb-2">Trusted & Secure</h3>
                  <p className="text-muted-foreground text-sm">
                    All properties are verified and we ensure secure transactions for your peace of mind.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <h3 className="mb-2">Market Insights</h3>
                  <p className="text-muted-foreground text-sm">
                    Get access to latest market trends and property valuations in Kigali.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="mb-2">Quick Response</h3>
                  <p className="text-muted-foreground text-sm">
                    Fast response times and efficient property viewing arrangements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="mb-2">Award Winning</h3>
                  <p className="text-muted-foreground text-sm">
                    Recognized for excellence in real estate services in Rwanda.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-muted rounded-lg p-8 mb-16">
            <h2 className="mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015, Rent in Kigali emerged from a simple vision: to make property searching 
                in Rwanda's capital city easier, more transparent, and more accessible to everyone.
              </p>
              <p>
                What started as a small team of passionate real estate professionals has grown into 
                one of Kigali's most trusted property platforms, serving hundreds of satisfied clients 
                every year.
              </p>
              <p>
                Today, we continue to innovate and improve our services, leveraging technology to 
                provide the best property search experience while maintaining the personal touch that 
                our clients value.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground mb-8">
              Our dedicated professionals are here to help you every step of the way
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground mx-auto mb-4 flex items-center justify-center text-2xl">
                    JM
                  </div>
                  <h4 className="mb-1">Jean Claude Mugabo</h4>
                  <p className="text-sm text-muted-foreground mb-2">Senior Property Agent</p>
                  <p className="text-sm text-muted-foreground">
                    10+ years of experience in Kigali real estate market
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground mx-auto mb-4 flex items-center justify-center text-2xl">
                    MU
                  </div>
                  <h4 className="mb-1">Marie Claire Uwase</h4>
                  <p className="text-sm text-muted-foreground mb-2">Luxury Property Specialist</p>
                  <p className="text-sm text-muted-foreground">
                    Expert in high-end properties and executive housing
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground mx-auto mb-4 flex items-center justify-center text-2xl">
                    DN
                  </div>
                  <h4 className="mb-1">David Niyonzima</h4>
                  <p className="text-sm text-muted-foreground mb-2">Commercial Property Expert</p>
                  <p className="text-sm text-muted-foreground">
                    Specializing in land and commercial developments
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}