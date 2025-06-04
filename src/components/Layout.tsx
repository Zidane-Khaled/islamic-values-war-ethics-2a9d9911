
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, User, LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'الرئيسية', href: '/' },
  { name: 'عن المركز', href: '/about' },
  { name: 'الأبحاث والدراسات', href: '/research' },
  { name: 'الأنشطة والفعاليات', href: '/activities' },
  { name: 'الشراكات الأكاديمية', href: '/partnerships' },
  { name: 'الموارد التعليمية', href: '/resources' },
  { name: 'تواصل معنا', href: '/contact' },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-islamic-gold/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 space-x-reverse">
                <div className="w-10 h-10 islamic-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">م</span>
                </div>
                <div className="text-right">
                  <h1 className="text-lg font-bold text-islamic-green">مركز القيم الإسلامية</h1>
                  <p className="text-sm text-islamic-gold">وأخلاقيات الحرب</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-islamic-gold',
                    location.pathname === item.href
                      ? 'text-islamic-gold'
                      : 'text-islamic-green'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
              <Button size="sm" className="bg-islamic-green hover:bg-islamic-darkGreen">
                <LogIn className="h-4 w-4 ml-2" />
                تسجيل الدخول
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-islamic-gold/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'block px-3 py-2 text-base font-medium rounded-md transition-colors',
                    location.pathname === item.href
                      ? 'text-islamic-gold bg-islamic-gold/10'
                      : 'text-islamic-green hover:text-islamic-gold hover:bg-islamic-gold/5'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-islamic-gold/20">
                <Button className="w-full bg-islamic-green hover:bg-islamic-darkGreen">
                  <LogIn className="h-4 w-4 ml-2" />
                  تسجيل الدخول
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-islamic-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">مركز القيم الإسلامية وأخلاقيات الحرب</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                مرجع أكاديمي وبحثي رائد في مجال دراسة القيم الإسلامية وأخلاقيات الحرب والسلام في الإسلام
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-gray-300 hover:text-islamic-gold transition-colors">عن المركز</Link></li>
                <li><Link to="/research" className="text-sm text-gray-300 hover:text-islamic-gold transition-colors">الأبحاث والدراسات</Link></li>
                <li><Link to="/activities" className="text-sm text-gray-300 hover:text-islamic-gold transition-colors">الأنشطة والفعاليات</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-300 hover:text-islamic-gold transition-colors">تواصل معنا</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">معلومات التواصل</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>البريد الإلكتروني: info@ivewc.org</p>
                <p>الهاتف: +00 000 000 0000</p>
                <p>العنوان: [عنوان المركز]</p>
              </div>
            </div>
          </div>
          <div className="border-t border-islamic-gold/30 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-300">
              © 2024 مركز القيم الإسلامية وأخلاقيات الحرب. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
