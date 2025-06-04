
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    details: ['info@ivewc.org', 'research@ivewc.org'],
    description: 'للاستفسارات العامة والبحثية'
  },
  {
    icon: Phone,
    title: 'الهاتف',
    details: ['+966 11 234 5678', '+966 11 234 5679'],
    description: 'متاح خلال ساعات العمل الرسمية'
  },
  {
    icon: MapPin,
    title: 'العنوان',
    details: ['شارع الملك فهد، الرياض', 'المملكة العربية السعودية، 12345'],
    description: 'مقر المركز الرئيسي'
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    details: ['الأحد - الخميس: 8:00 ص - 4:00 م', 'الجمعة - السبت: مغلق'],
    description: 'أوقات الاستقبال والرد على الاستفسارات'
  }
];

const departments = [
  { value: 'general', label: 'استفسار عام' },
  { value: 'research', label: 'الأبحاث والدراسات' },
  { value: 'partnerships', label: 'الشراكات الأكاديمية' },
  { value: 'events', label: 'الفعاليات والأنشطة' },
  { value: 'library', label: 'المكتبة الرقمية' },
  { value: 'media', label: 'الإعلام والنشر' }
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-islamic-green to-islamic-darkGreen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              تواصل معنا
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              نحن هنا للإجابة على استفساراتكم ومساعدتكم في رحلتكم الأكاديمية والبحثية
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">
              معلومات التواصل
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              تواصلوا معنا من خلال القنوات المختلفة المتاحة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-islamic-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-islamic-green" />
                  </div>
                  <CardTitle className="text-islamic-green">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, i) => (
                      <p key={i} className="font-medium text-gray-700">{detail}</p>
                    ))}
                  </div>
                  <CardDescription className="leading-relaxed">
                    {info.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">
                أرسل لنا رسالة
              </h2>
              <p className="text-lg text-gray-600">
                املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-islamic-green flex items-center">
                  <MessageCircle className="h-6 w-6 ml-2" />
                  نموذج التواصل
                </CardTitle>
                <CardDescription>
                  يرجى ملء جميع الحقول المطلوبة للحصول على أفضل خدمة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">الاسم الأول *</Label>
                      <Input id="firstName" placeholder="أدخل اسمك الأول" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">الاسم الأخير *</Label>
                      <Input id="lastName" placeholder="أدخل اسمك الأخير" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">البريد الإلكتروني *</Label>
                      <Input id="email" type="email" placeholder="example@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input id="phone" placeholder="+966 50 123 4567" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="organization">المؤسسة/الجامعة</Label>
                      <Input id="organization" placeholder="اسم المؤسسة أو الجامعة" />
                    </div>
                    <div>
                      <Label htmlFor="department">القسم المختص *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر القسم المناسب" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.value} value={dept.value}>
                              {dept.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">موضوع الرسالة *</Label>
                    <Input id="subject" placeholder="عنوان موجز لموضوع رسالتك" />
                  </div>

                  <div>
                    <Label htmlFor="message">الرسالة *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="اكتب رسالتك هنا... يرجى تقديم تفاصيل كافية لنتمكن من مساعدتك بأفضل شكل ممكن"
                      rows={6}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-islamic-green hover:bg-islamic-darkGreen">
                      <Send className="h-4 w-4 ml-2" />
                      إرسال الرسالة
                    </Button>
                    <Button type="button" variant="outline" className="border-islamic-gold text-islamic-gold hover:bg-islamic-gold hover:text-white">
                      مسح النموذج
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-islamic-green mb-4">
              موقعنا
            </h2>
            <p className="text-lg text-gray-600">
              زوروا مقر المركز الرئيسي في قلب الرياض
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">خريطة الموقع</p>
              <p className="text-sm text-gray-500 mt-2">سيتم عرض الخريطة التفاعلية هنا</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-islamic-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            لديك أسئلة أخرى؟
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            تصفح قسم الأسئلة الشائعة أو تواصل معنا مباشرة للحصول على المساعدة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-islamic-gold hover:bg-islamic-darkGold text-islamic-green font-semibold">
              الأسئلة الشائعة
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green">
              دردشة مباشرة
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
