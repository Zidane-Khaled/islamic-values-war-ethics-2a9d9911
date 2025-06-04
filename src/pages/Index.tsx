
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Calendar, Award, ArrowLeft, Search } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'مكتبة رقمية شاملة',
    description: 'مجموعة واسعة من المصادر والكتب حول أخلاقيات الحرب في الإسلام',
    href: '/resources'
  },
  {
    icon: Users,
    title: 'شراكات أكاديمية',
    description: 'تعاون مع الجامعات والمؤسسات البحثية العالمية',
    href: '/partnerships'
  },
  {
    icon: Calendar,
    title: 'أنشطة وفعاليات',
    description: 'مؤتمرات وندوات ودورات تدريبية متخصصة',
    href: '/activities'
  },
  {
    icon: Award,
    title: 'أبحاث متقدمة',
    description: 'دراسات مقارنة وأوراق بحثية في الفقه والفلسفة السياسية',
    href: '/research'
  }
];

const latestResearch = [
  {
    title: 'مفهوم الحرب العادلة في الفقه الإسلامي',
    description: 'دراسة مقارنة بين المفاهيم الإسلامية والغربية للحرب العادلة',
    date: '2024-01-15',
    category: 'فقه'
  },
  {
    title: 'أخلاقيات القتال في التراث الإسلامي',
    description: 'تحليل للنصوص الكلاسيكية والمعاصرة حول آداب الحرب',
    date: '2024-01-10',
    category: 'تراث'
  },
  {
    title: 'السلام والتعايش في الفكر الإسلامي',
    description: 'استكشاف مبادئ السلام والحوار بين الحضارات',
    date: '2024-01-05',
    category: 'فلسفة'
  }
];

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-islamic-green via-islamic-darkGreen to-islamic-green islamic-pattern">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              مركز القيم الإسلامية
              <span className="block text-islamic-gold">وأخلاقيات الحرب</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              مرجع أكاديمي وبحثي رائد في مجال دراسة القيم الإسلامية وأخلاقيات الحرب والسلام
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-islamic-gold hover:bg-islamic-darkGold text-islamic-green font-semibold">
                استكشف المكتبة الرقمية
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green">
                عن المركز
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">
              خدماتنا ومميزاتنا
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات البحثية والأكاديمية في مجال أخلاقيات الحرب الإسلامية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-islamic-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-islamic-green" />
                  </div>
                  <CardTitle className="text-islamic-green">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="mt-4 text-center">
                    <Link 
                      to={feature.href}
                      className="text-islamic-gold hover:text-islamic-darkGold font-medium inline-flex items-center"
                    >
                      اعرف المزيد
                      <ArrowLeft className="mr-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Research Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">
                آخر الأبحاث والدراسات
              </h2>
              <p className="text-lg text-gray-600">
                اطلع على أحدث الإصدارات البحثية من المركز
              </p>
            </div>
            <Link to="/research">
              <Button className="bg-islamic-green hover:bg-islamic-darkGreen">
                جميع الأبحاث
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestResearch.map((research, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-islamic-gold/20 text-islamic-green px-3 py-1 rounded-full text-sm font-medium">
                      {research.category}
                    </span>
                    <span className="text-sm text-gray-500">{research.date}</span>
                  </div>
                  <CardTitle className="text-islamic-green leading-relaxed">
                    {research.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-4">
                    {research.description}
                  </CardDescription>
                  <Button variant="ghost" className="text-islamic-gold hover:text-islamic-darkGold p-0">
                    قراءة المزيد
                    <ArrowLeft className="mr-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-islamic-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            انضم إلى مجتمعنا الأكاديمي
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            كن جزءاً من رحلتنا في نشر المعرفة وتعزيز الفهم حول القيم الإسلامية وأخلاقيات الحرب
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-islamic-gold hover:bg-islamic-darkGold text-islamic-green font-semibold">
              إنشاء حساب جديد
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green">
              تصفح كضيف
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
