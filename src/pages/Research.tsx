
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Download, Calendar, Eye } from 'lucide-react';

const categories = ['الكل', 'فقه', 'فلسفة', 'تاريخ', 'دراسات مقارنة', 'قانون دولي'];

const researchPapers = [
  {
    id: 1,
    title: 'مفهوم الحرب العادلة في الفقه الإسلامي: دراسة تأصيلية',
    description: 'بحث شامل يتناول المفاهيم الأساسية للحرب العادلة في التراث الإسلامي ومقارنتها بالنظريات المعاصرة',
    author: 'د. محمد أحمد السيد',
    date: '2024-01-15',
    category: 'فقه',
    downloads: 1250,
    views: 3420
  },
  {
    id: 2,
    title: 'أخلاقيات القتال في السيرة النبوية: تحليل تطبيقي',
    description: 'دراسة تطبيقية لمبادئ أخلاقيات الحرب من خلال أحداث السيرة النبوية الشريفة',
    author: 'د. فاطمة عبد الرحمن',
    date: '2024-01-10',
    category: 'تاريخ',
    downloads: 980,
    views: 2150
  },
  {
    id: 3,
    title: 'مبادئ السلام في القرآن الكريم: رؤية معاصرة',
    description: 'تحليل للآيات القرآنية المتعلقة بالسلام والحرب وتطبيقاتها في العصر الحديث',
    author: 'د. أحمد محمود الطاهر',
    date: '2024-01-05',
    category: 'فلسفة',
    downloads: 1580,
    views: 4200
  },
  {
    id: 4,
    title: 'مقارنة بين نظرية الحرب العادلة الإسلامية والغربية',
    description: 'دراسة مقارنة شاملة بين المفاهيم الإسلامية والغربية للحرب العادلة ونقاط التقارب والاختلاف',
    author: 'د. سارة الزهراني',
    date: '2023-12-28',
    category: 'دراسات مقارنة',
    downloads: 2100,
    views: 5680
  },
  {
    id: 5,
    title: 'حماية المدنيين في الشريعة الإسلامية والقانون الدولي',
    description: 'بحث يقارن بين أحكام حماية المدنيين في الفقه الإسلامي وقواعد القانون الدولي الإنساني',
    author: 'د. عمر الفاروق',
    date: '2023-12-20',
    category: 'قانون دولي',
    downloads: 1750,
    views: 3890
  },
  {
    id: 6,
    title: 'تطور مفهوم الجهاد عبر التاريخ الإسلامي',
    description: 'دراسة تاريخية لتطور مفهوم الجهاد ومبادئه عبر العصور الإسلامية المختلفة',
    author: 'د. خالد العثماني',
    date: '2023-12-15',
    category: 'تاريخ',
    downloads: 1320,
    views: 2760
  }
];

export default function Research() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResearch = researchPapers.filter(paper => {
    const matchesCategory = selectedCategory === 'الكل' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-islamic-green to-islamic-darkGreen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              الأبحاث والدراسات
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              مكتبة شاملة من الأبحاث الأكاديمية والدراسات المتخصصة في أخلاقيات الحرب الإسلامية
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="ابحث في الأبحاث..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-islamic-green hover:bg-islamic-darkGreen" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-lg text-gray-600">
              عرض {filteredResearch.length} من {researchPapers.length} بحث
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredResearch.map((paper) => (
              <Card key={paper.id} className="hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="bg-islamic-gold/20 text-islamic-green">
                      {paper.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 ml-1" />
                      {paper.date}
                    </div>
                  </div>
                  <CardTitle className="text-islamic-green leading-relaxed mb-2">
                    {paper.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 font-medium">{paper.author}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-6">
                    {paper.description}
                  </CardDescription>
                  
                  {/* Statistics */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 ml-1" />
                      {paper.views.toLocaleString()} مشاهدة
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 ml-1" />
                      {paper.downloads.toLocaleString()} تحميل
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-islamic-green hover:bg-islamic-darkGreen">
                      <Eye className="h-4 w-4 ml-2" />
                      قراءة البحث
                    </Button>
                    <Button variant="outline" className="text-islamic-gold border-islamic-gold hover:bg-islamic-gold hover:text-white">
                      <Download className="h-4 w-4 ml-2" />
                      تحميل PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
              تحميل المزيد من الأبحاث
            </Button>
          </div>
        </div>
      </section>

      {/* Submit Research Section */}
      <section className="py-20 bg-islamic-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            هل لديك بحث تود نشره؟
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            نرحب بالأبحاث الأكاديمية المتميزة في مجال أخلاقيات الحرب والسلام الإسلامية
          </p>
          <Button size="lg" className="bg-islamic-gold hover:bg-islamic-darkGold text-islamic-green font-semibold">
            إرسال بحث للنشر
          </Button>
        </div>
      </section>
    </div>
  );
}
