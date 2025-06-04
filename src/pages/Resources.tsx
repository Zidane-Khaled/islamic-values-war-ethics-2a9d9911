
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Download, BookOpen, FileText, Video, Database, Eye, Calendar } from 'lucide-react';

const digitalLibrary = [
  {
    id: 1,
    title: 'الأحكام السلطانية للماوردي',
    author: 'أبو الحسن الماوردي',
    description: 'كتاب أساسي في الفقه السياسي الإسلامي يتناول أحكام الحرب والسلم',
    category: 'كتب كلاسيكية',
    language: 'عربي',
    pages: 450,
    downloadCount: 2150,
    viewCount: 5420
  },
  {
    id: 2,
    title: 'آداب الحرب في الإسلام',
    author: 'د. محمد حميد الله',
    description: 'دراسة معاصرة شاملة لآداب وأخلاقيات الحرب في التراث الإسلامي',
    category: 'دراسات معاصرة',
    language: 'عربي / إنجليزي',
    pages: 320,
    downloadCount: 1890,
    viewCount: 4120
  },
  {
    id: 3,
    title: 'الجهاد في الإسلام: دراسة فقهية مقارنة',
    author: 'د. وهبة الزحيلي',
    description: 'تحليل فقهي معمق لمفهوم الجهاد وضوابطه الشرعية',
    category: 'فقه مقارن',
    language: 'عربي',
    pages: 280,
    downloadCount: 3200,
    viewCount: 7650
  }
];

const textAnalysis = [
  {
    id: 1,
    title: 'تحليل آية السيف في سياقها التاريخي',
    source: 'القرآن الكريم - سورة التوبة',
    description: 'دراسة تحليلية لآية السيف ومواضع نزولها وتطبيقاتها العملية',
    author: 'د. عبد الرحمن الشهري',
    date: '2024-01-20',
    category: 'تفسير'
  },
  {
    id: 2,
    title: 'حديث "نُصِرْتُ بِالرُّعْبِ" - دراسة حديثية',
    source: 'صحيح البخاري',
    description: 'تحليل حديثي لمفهوم الرعب في الحرب والحكمة منه في الشريعة',
    author: 'د. محمد الأحمدي',
    date: '2024-01-15',
    category: 'حديث'
  }
];

const multimedia = [
  {
    id: 1,
    title: 'محاضرة: أخلاقيات الحرب في السيرة النبوية',
    speaker: 'د. طارق السويدان',
    duration: '45 دقيقة',
    views: 12500,
    date: '2024-01-10',
    type: 'video'
  },
  {
    id: 2,
    title: 'ندوة: الحرب العادلة بين الإسلام والغرب',
    speaker: 'د. محمد عمارة',
    duration: '90 دقيقة',
    views: 8750,
    date: '2023-12-20',
    type: 'video'
  }
];

const database = [
  {
    id: 1,
    title: 'قاعدة بيانات النصوص الفقهية في أحكام الحرب',
    description: 'مجموعة شاملة من النصوص الفقهية المتعلقة بأحكام الحرب والسلم من مختلف المذاهب',
    records: 1250,
    lastUpdate: '2024-01-25'
  },
  {
    id: 2,
    title: 'أرشيف الوثائق التاريخية للحروب الإسلامية',
    description: 'وثائق تاريخية نادرة تؤرخ للحروب في العصور الإسلامية المختلفة',
    records: 680,
    lastUpdate: '2024-01-20'
  }
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('library');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-islamic-green to-islamic-darkGreen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              الموارد التعليمية
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              مكتبة شاملة من الموارد الأكاديمية والتعليمية في مجال أخلاقيات الحرب الإسلامية
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="ابحث في الموارد التعليمية..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-12 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="library" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                المكتبة الرقمية
              </TabsTrigger>
              <TabsTrigger value="analysis" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                تحليل النصوص
              </TabsTrigger>
              <TabsTrigger value="multimedia" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                وسائط متعددة
              </TabsTrigger>
              <TabsTrigger value="database" className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                قواعد البيانات
              </TabsTrigger>
            </TabsList>

            {/* Digital Library Tab */}
            <TabsContent value="library">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-islamic-green mb-4">المكتبة الرقمية</h2>
                <p className="text-gray-600">
                  مجموعة غنية من الكتب والمصادر النادرة حول أخلاقيات الحرب في الإسلام
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {digitalLibrary.map((book) => (
                  <Card key={book.id} className="hover-lift">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2 bg-islamic-gold/20 text-islamic-green">
                        {book.category}
                      </Badge>
                      <CardTitle className="text-islamic-green leading-relaxed">
                        {book.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 font-medium">{book.author}</p>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed mb-4">
                        {book.description}
                      </CardDescription>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <p>اللغة: {book.language}</p>
                        <p>عدد الصفحات: {book.pages}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 ml-1" />
                            {book.viewCount.toLocaleString()}
                          </div>
                          <div className="flex items-center">
                            <Download className="h-4 w-4 ml-1" />
                            {book.downloadCount.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-islamic-green hover:bg-islamic-darkGreen">
                          <Eye className="h-4 w-4 ml-2" />
                          قراءة
                        </Button>
                        <Button size="sm" variant="outline" className="text-islamic-gold border-islamic-gold hover:bg-islamic-gold hover:text-white">
                          <Download className="h-4 w-4 ml-2" />
                          تحميل
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Text Analysis Tab */}
            <TabsContent value="analysis">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-islamic-green mb-4">تحليل النصوص</h2>
                <p className="text-gray-600">
                  تحليلات معمقة للنصوص التراثية والمعاصرة المتعلقة بأخلاقيات الحرب
                </p>
              </div>
              <div className="space-y-6">
                {textAnalysis.map((analysis) => (
                  <Card key={analysis.id} className="hover-lift">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-islamic-gold/20 text-islamic-green">
                          {analysis.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 ml-1" />
                          {analysis.date}
                        </div>
                      </div>
                      <CardTitle className="text-islamic-green leading-relaxed">
                        {analysis.title}
                      </CardTitle>
                      <p className="text-sm text-islamic-gold font-medium">{analysis.source}</p>
                      <p className="text-sm text-gray-600">{analysis.author}</p>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed mb-4">
                        {analysis.description}
                      </CardDescription>
                      <Button className="bg-islamic-green hover:bg-islamic-darkGreen">
                        قراءة التحليل كاملاً
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Multimedia Tab */}
            <TabsContent value="multimedia">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-islamic-green mb-4">الوسائط المتعددة</h2>
                <p className="text-gray-600">
                  مجموعة من المحاضرات والندوات المرئية في مجال أخلاقيات الحرب الإسلامية
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {multimedia.map((media) => (
                  <Card key={media.id} className="hover-lift">
                    <div className="aspect-video bg-gray-200 rounded-t-lg flex items-center justify-center">
                      <Video className="h-16 w-16 text-gray-400" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-islamic-green leading-relaxed">
                        {media.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 font-medium">{media.speaker}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span>المدة: {media.duration}</span>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 ml-1" />
                          {media.views.toLocaleString()} مشاهدة
                        </div>
                      </div>
                      <Button className="w-full bg-islamic-green hover:bg-islamic-darkGreen">
                        مشاهدة الفيديو
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Database Tab */}
            <TabsContent value="database">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-islamic-green mb-4">قواعد البيانات</h2>
                <p className="text-gray-600">
                  قواعد بيانات شاملة للنصوص والوثائق التاريخية المتعلقة بأخلاقيات الحرب
                </p>
              </div>
              <div className="space-y-6">
                {database.map((db) => (
                  <Card key={db.id} className="hover-lift">
                    <CardHeader>
                      <CardTitle className="text-islamic-green leading-relaxed">
                        {db.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed mb-4">
                        {db.description}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span>{db.records.toLocaleString()} سجل</span>
                        <span>آخر تحديث: {db.lastUpdate}</span>
                      </div>
                      <Button className="bg-islamic-green hover:bg-islamic-darkGreen">
                        <Database className="h-4 w-4 ml-2" />
                        استكشاف قاعدة البيانات
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-islamic-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ساهم في إثراء المكتبة الرقمية
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            شاركنا مصادرك الأكاديمية وساهم في بناء أكبر مكتبة رقمية متخصصة في أخلاقيات الحرب الإسلامية
          </p>
          <Button size="lg" className="bg-islamic-gold hover:bg-islamic-darkGold text-islamic-green font-semibold">
            إضافة مورد جديد
          </Button>
        </div>
      </section>
    </div>
  );
}
