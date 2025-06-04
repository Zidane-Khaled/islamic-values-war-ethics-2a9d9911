
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Users, Globe } from 'lucide-react';

const objectives = [
  {
    icon: Target,
    title: 'الرؤية',
    description: 'أن نكون المرجع الأكاديمي الرائد عالمياً في مجال دراسة القيم الإسلامية وأخلاقيات الحرب والسلام'
  },
  {
    icon: Eye,
    title: 'الرسالة',
    description: 'نشر المعرفة العلمية المعمقة حول أخلاقيات الحرب في الإسلام وتعزيز الحوار الأكاديمي بين الحضارات'
  },
  {
    icon: Users,
    title: 'القيم',
    description: 'الالتزام بالمعايير الأكاديمية العالية، والموضوعية العلمية، والحوار البناء، والتميز البحثي'
  },
  {
    icon: Globe,
    title: 'التأثير',
    description: 'إثراء الفكر الإنساني وتعزيز السلام العالمي من خلال فهم أعمق للمبادئ الإسلامية'
  }
];

const targetAudience = [
  {
    title: 'الباحثون والأكاديميون',
    description: 'المتخصصون في الفلسفة والدراسات الإسلامية والعلوم السياسية'
  },
  {
    title: 'صناع القرار',
    description: 'السياسيون والدبلوماسيون المهتمون بالنزاعات الدولية وحلول السلام'
  },
  {
    title: 'المؤسسات الحقوقية',
    description: 'المنظمات الإنسانية والحقوقية العاملة في مناطق النزاع'
  },
  {
    title: 'الجمهور المثقف',
    description: 'المهتمون بالفكر الإسلامي وأخلاقيات الحرب والسلام'
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-islamic-green to-islamic-darkGreen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              عن المركز
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              مركز متخصص في دراسة وبحث القيم الإسلامية وأخلاقيات الحرب والسلام
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-6">
                نبذة تعريفية
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                يهدف مركز القيم الإسلامية وأخلاقيات الحرب إلى أن يكون مرجعاً أكاديمياً وبحثياً رائداً في مجال 
                دراسة القيم الإسلامية وأخلاقيات الحرب والسلام في الإسلام. 
              </p>
              <p className="mb-6">
                يعمل المركز على سد الفجوة المعرفية بين الفقه الإسلامي والفلسفة السياسية والقانون الدولي، 
                مع التركيز على تقديم منظور إسلامي عميق ومعاصر لقضايا النزاعات والتعايش السلمي.
              </p>
              <p className="mb-8">
                من خلال البحث العلمي المتقدم والتعاون الأكاديمي الدولي، يسعى المركز إلى إثراء الحوار 
                الحضاري وتعزيز الفهم المتبادل بين الثقافات المختلفة حول مسائل الحرب والسلام.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">
              رؤيتنا ورسالتنا
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نؤمن بأهمية المعرفة في بناء عالم أكثر سلاماً وتفاهماً
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-islamic-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <objective.icon className="h-8 w-8 text-islamic-green" />
                  </div>
                  <CardTitle className="text-islamic-green">{objective.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {objective.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">
              الفئة المستهدفة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نخدم مجتمعاً واسعاً من الباحثين والمهتمين بالدراسات الإسلامية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-islamic-green">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {audience.description}
                  </CardDescription>
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
            انضم إلى رحلتنا العلمية
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            كن جزءاً من مجتمع أكاديمي متميز يسعى لتعزيز السلام والتفاهم بين الشعوب
          </p>
        </div>
      </section>
    </div>
  );
}
