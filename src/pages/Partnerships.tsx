
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, BookOpen, Users, Award, Building, MapPin, ExternalLink } from 'lucide-react';

const partners = [
  {
    id: 1,
    name: 'جامعة الأزهر الشريف',
    type: 'جامعة',
    location: 'القاهرة، مصر',
    description: 'شراكة استراتيجية في مجال البحوث الإسلامية والدراسات الفقهية المتعلقة بأخلاقيات الحرب',
    collaborationType: 'بحثية وأكاديمية',
    established: '2020',
    projects: 15,
    logo: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'المعهد العالمي للفكر الإسلامي',
    type: 'معهد بحثي',
    location: 'واشنطن، الولايات المتحدة',
    description: 'تعاون في نشر الأبحاث والدراسات المقارنة بين الفكر الإسلامي والغربي في قضايا السلام والحرب',
    collaborationType: 'نشر وترجمة',
    established: '2019',
    projects: 8,
    logo: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'جامعة الملك سعود',
    type: 'جامعة',
    location: 'الرياض، السعودية',
    description: 'شراكة في تطوير برامج الدراسات العليا في الفقه السياسي وأخلاقيات الحرب الإسلامية',
    collaborationType: 'أكاديمية وتدريبية',
    established: '2021',
    projects: 12,
    logo: '/placeholder.svg'
  },
  {
    id: 4,
    name: 'مركز دراسات الوحدة العربية',
    type: 'مركز دراسات',
    location: 'بيروت، لبنان',
    description: 'تعاون في إنتاج دراسات معمقة حول دور القيم الإسلامية في حل النزاعات العربية المعاصرة',
    collaborationType: 'بحثية وتحليلية',
    established: '2022',
    projects: 6,
    logo: '/placeholder.svg'
  },
  {
    id: 5,
    name: 'المعهد الأوروبي للعلوم الإنسانية',
    type: 'معهد أكاديمي',
    location: 'باريس، فرنسا',
    description: 'شراكة لتعزيز الحوار بين الحضارات وفهم المنظور الإسلامي لأخلاقيات الحرب في السياق الأوروبي',
    collaborationType: 'حوار حضاري',
    established: '2023',
    projects: 4,
    logo: '/placeholder.svg'
  }
];

const collaborationTypes = [
  {
    icon: BookOpen,
    title: 'البحوث المشتركة',
    description: 'تطوير مشاريع بحثية متعددة التخصصات مع الجامعات والمعاهد الشريكة'
  },
  {
    icon: Users,
    title: 'تبادل الخبرات',
    description: 'برامج تبادل الأساتذة والباحثين لإثراء التجربة الأكاديمية'
  },
  {
    icon: Globe,
    title: 'المؤتمرات الدولية',
    description: 'تنظيم مؤتمرات وندوات دولية بالتعاون مع المؤسسات الشريكة'
  },
  {
    icon: Award,
    title: 'النشر المشترك',
    description: 'إصدار كتب ومجلات علمية مشتركة في مجال أخلاقيات الحرب الإسلامية'
  }
];

const partnershipBenefits = [
  'الوصول إلى شبكة عالمية من الباحثين المتخصصين',
  'فرص التمويل المشترك للمشاريع البحثية',
  'تبادل الموارد الأكاديمية والمكتبية',
  'إمكانية النشر في المجلات العلمية المحكمة',
  'المشاركة في الفعاليات والمؤتمرات الدولية',
  'تطوير برامج أكاديمية مشتركة'
];

export default function Partnerships() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-islamic-green to-islamic-darkGreen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              الشراكات الأكاديمية
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              شبكة عالمية من التعاون الأكاديمي مع أبرز المؤسسات التعليمية والبحثية
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">
              أنواع التعاون
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نؤمن بأهمية التعاون الأكاديمي في إثراء المعرفة وتعزيز البحث العلمي
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationTypes.map((type, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-islamic-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="h-8 w-8 text-islamic-green" />
                  </div>
                  <CardTitle className="text-islamic-green">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">
              شركاؤنا الأكاديميون
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نفخر بشراكتنا مع نخبة من أبرز المؤسسات الأكاديمية والبحثية حول العالم
            </p>
          </div>

          <div className="space-y-8">
            {partners.map((partner) => (
              <Card key={partner.id} className="hover-lift overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/4 bg-gray-200 min-h-48 flex items-center justify-center">
                    <Building className="h-16 w-16 text-gray-400" />
                  </div>
                  <div className="md:w-3/4 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge variant="secondary" className="bg-islamic-gold/20 text-islamic-green">
                          {partner.type}
                        </Badge>
                        <Badge variant="outline">
                          شراكة منذ {partner.established}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 ml-1" />
                          {partner.location}
                        </div>
                      </div>
                      <CardTitle className="text-islamic-green leading-relaxed mb-2">
                        {partner.name}
                      </CardTitle>
                      <p className="text-sm text-islamic-gold font-medium">{partner.collaborationType}</p>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <CardDescription className="leading-relaxed mb-6">
                        {partner.description}
                      </CardDescription>
                      
                      <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 ml-1 text-islamic-green" />
                          {partner.projects} مشروع مشترك
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" className="text-islamic-gold border-islamic-gold hover:bg-islamic-gold hover:text-white">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          زيارة الموقع
                        </Button>
                        <Button variant="ghost" className="text-islamic-green hover:bg-islamic-green/10">
                          عرض المشاريع المشتركة
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">
              مميزات الشراكة معنا
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              انضم إلى شبكتنا الأكاديمية واستفد من فرص التعاون والتطوير المتنوعة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-2 h-2 bg-islamic-gold rounded-full mt-3 ml-3 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-islamic-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            هل تريد أن تكون شريكاً لنا؟
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            نرحب بالمؤسسات الأكاديمية والبحثية التي تشاركنا الرؤية في تعزيز فهم أخلاقيات الحرب الإسلامية
          </p>
          <Button size="lg" className="bg-islamic-gold hover:bg-islamic-darkGold text-islamic-green font-semibold">
            ابدأ شراكة معنا
          </Button>
        </div>
      </section>
    </div>
  );
}
