
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, ArrowLeft } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'المؤتمر الدولي للقيم الإسلامية وأخلاقيات الحرب',
    description: 'مؤتمر أكاديمي دولي يجمع نخبة من الباحثين والأكاديميين لمناقشة أحدث الدراسات في مجال أخلاقيات الحرب الإسلامية',
    date: '2024-03-15',
    endDate: '2024-03-17',
    location: 'جامعة الأزهر - القاهرة',
    type: 'مؤتمر',
    attendees: 200,
    status: 'مفتوح للتسجيل',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'ندوة: الحرب العادلة بين الفقه الإسلامي والقانون الدولي',
    description: 'ندوة علمية تقارن بين مفاهيم الحرب العادلة في الشريعة الإسلامية والقانون الدولي المعاصر',
    date: '2024-02-28',
    endDate: '2024-02-28',
    location: 'مركز الملك فيصل للبحوث والدراسات الإسلامية',
    type: 'ندوة',
    attendees: 80,
    status: 'مفتوح للتسجيل',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'دورة تدريبية: مناهج البحث في الدراسات الإسلامية',
    description: 'دورة تدريبية متخصصة للباحثين الجدد في مجال الدراسات الإسلامية وأخلاقيات الحرب',
    date: '2024-02-20',
    endDate: '2024-02-22',
    location: 'المركز - عبر الإنترنت',
    type: 'دورة تدريبية',
    attendees: 50,
    status: 'مفتوح للتسجيل',
    image: '/placeholder.svg'
  }
];

const pastEvents = [
  {
    id: 4,
    title: 'محاضرة: تاريخ الجهاد في الإسلام',
    description: 'محاضرة تاريخية شاملة حول تطور مفهوم الجهاد عبر العصور الإسلامية',
    date: '2024-01-10',
    speaker: 'د. محمد الطاهر',
    type: 'محاضرة',
    attendees: 120
  },
  {
    id: 5,
    title: 'ورشة عمل: تحليل النصوص التراثية',
    description: 'ورشة عمل تطبيقية لتعلم مناهج تحليل النصوص الإسلامية الكلاسيكية',
    date: '2023-12-15',
    speaker: 'د. فاطمة الزهراء',
    type: 'ورشة عمل',
    attendees: 35
  }
];

const eventTypes = {
  'مؤتمر': 'bg-blue-100 text-blue-800',
  'ندوة': 'bg-green-100 text-green-800',
  'دورة تدريبية': 'bg-purple-100 text-purple-800',
  'محاضرة': 'bg-orange-100 text-orange-800',
  'ورشة عمل': 'bg-pink-100 text-pink-800'
};

export default function Activities() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-islamic-green to-islamic-darkGreen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              الأنشطة والفعاليات
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              مؤتمرات وندوات ودورات تدريبية متخصصة في مجال أخلاقيات الحرب الإسلامية
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">
              الفعاليات القادمة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              انضم إلى فعالياتنا الأكاديمية القادمة واستفد من التجارب العلمية المتميزة
            </p>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover-lift overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gray-200 min-h-48"></div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge className={eventTypes[event.type as keyof typeof eventTypes]}>
                          {event.type}
                        </Badge>
                        <Badge variant="outline" className="text-islamic-green border-islamic-green">
                          {event.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-islamic-green leading-relaxed mb-2">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <CardDescription className="leading-relaxed mb-6">
                        {event.description}
                      </CardDescription>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-5 w-5 ml-2 text-islamic-green" />
                          <span>
                            {event.date} 
                            {event.endDate !== event.date && ` - ${event.endDate}`}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 ml-2 text-islamic-green" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-5 w-5 ml-2 text-islamic-green" />
                          <span>حتى {event.attendees} مشارك</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-islamic-green hover:bg-islamic-darkGreen">
                          التسجيل في الفعالية
                          <ArrowLeft className="mr-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="text-islamic-gold border-islamic-gold hover:bg-islamic-gold hover:text-white">
                          تفاصيل أكثر
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

      {/* Past Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">
              الفعاليات السابقة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              استعرض الفعاليات التي نظمها المركز وأثرت في المجتمع الأكاديمي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={eventTypes[event.type as keyof typeof eventTypes]}>
                      {event.type}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 ml-1" />
                      {event.date}
                    </div>
                  </div>
                  <CardTitle className="text-islamic-green leading-relaxed">
                    {event.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 font-medium">{event.speaker}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-4">
                    {event.description}
                  </CardDescription>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 ml-1 text-islamic-green" />
                    {event.attendees} مشارك
                  </div>
                  <Button variant="ghost" className="text-islamic-gold hover:text-islamic-darkGold p-0 mt-4">
                    مشاهدة التسجيل
                    <ArrowLeft className="mr-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-islamic-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            اقترح فعالية أو تعاون معنا
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            نرحب بالأفكار الإبداعية والتعاون مع المؤسسات الأكاديمية لإثراء المحتوى العلمي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-islamic-gold hover:bg-islamic-darkGold text-islamic-green font-semibold">
              اقترح فعالية
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green">
              تواصل للتعاون
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
