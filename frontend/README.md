# DataBoard - Frontend

**English** | [Türkçe](#kullanıcılar-ve-gönderiler-yöneticisi---frontend)

A modern, responsive React application built with TypeScript and Tailwind CSS for managing users and their posts. Features a beautiful, intuitive interface with smooth animations and excellent user experience.

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Development
```bash
cd frontend
npm install
npm run dev
```

The application will be available at `http://localhost:5173`

### Environment Configuration

Create a `.env.local` file in the frontend directory:

```env
VITE_API_URL=http://localhost:3005/api
```

For production, update the URL to your deployed backend:
```env
VITE_API_URL=https://your-backend.onrender.com/api
```

## Features

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Fade-in, slide-up, and hover effects
- **Beautiful Components**: Cards, buttons, forms with consistent styling
- **Dark/Light Theme**: Clean, professional color scheme

### 👥 User Management
- **View All Users**: Grid layout with user cards
- **Create Users**: Modal form with validation
- **Edit Users**: In-place editing with real-time updates
- **Delete Users**: Confirmation dialogs for safety
- **User Details**: Dedicated page showing user info and posts

### 📝 Post Management
- **View All Posts**: List view with filtering options
- **Create Posts**: Associate posts with specific users
- **Edit Posts**: Update title and content
- **Delete Posts**: Safe deletion with confirmation
- **User Posts**: View all posts by a specific user

### 🔍 Advanced Features
- **Search Functionality**: Search users and posts by name, email, or content
- **Filtering**: Filter posts by user
- **Real-time Updates**: Instant UI updates after operations
- **Error Handling**: User-friendly error messages
- **Loading States**: Skeleton loaders and spinners

## Technology Stack

- **React 18**: Latest React with hooks and functional components
- **TypeScript**: Full type safety throughout the application
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: Client-side routing
- **Axios**: HTTP client for API communication
- **Lucide React**: Beautiful, customizable icons

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout with navigation
│   ├── UserList.tsx    # User grid component
│   ├── UserForm.tsx    # User creation/editing form
│   ├── PostList.tsx    # Post list component
│   └── PostForm.tsx    # Post creation/editing form
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── UsersPage.tsx   # Users management page
│   ├── PostsPage.tsx   # Posts management page
│   └── UserDetail.tsx  # Individual user page
├── services/           # API service layer
│   ├── api.ts         # Axios configuration
│   ├── userService.ts # User-related API calls
│   └── postService.ts # Post-related API calls
├── types/              # TypeScript type definitions
│   └── index.ts       # All type definitions
├── App.tsx            # Main app component
├── App.css            # Global styles and Tailwind
└── main.tsx           # Application entry point
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Deployment on Vercel

1. **Connect your GitHub repository** to Vercel
2. **Configure the project:**
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Set Environment Variables:**
   - `VITE_API_URL`: Your deployed backend URL (e.g., `https://your-backend.onrender.com/api`)

4. **Deploy** - Vercel will automatically build and deploy your application

## API Integration

The frontend communicates with the NestJS backend through a well-structured service layer:

- **Centralized API Configuration**: Single axios instance with interceptors
- **Type-Safe Services**: Full TypeScript support for all API calls
- **Error Handling**: Consistent error handling across the application
- **Loading States**: Proper loading indicators for better UX

## Responsive Design

The application is built with a mobile-first approach:

- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Layouts**: CSS Grid and Flexbox for responsive layouts
- **Touch-Friendly**: Optimized for touch interactions on mobile devices
- **Performance**: Optimized images and lazy loading

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

# Kullanıcılar ve Gönderiler Yöneticisi - Frontend

**Türkçe** | [English](#users--posts-manager---frontend)

Kullanıcıları ve gönderilerini yönetmek için TypeScript ve Tailwind CSS ile geliştirilmiş modern, responsive React uygulaması. Pürüzsüz animasyonlar ve mükemmel kullanıcı deneyimi ile güzel, sezgisel bir arayüze sahip.

## Hızlı Başlangıç

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Kurulum ve Geliştirme
```bash
cd frontend
npm install
npm run dev
```

Uygulama `http://localhost:5173` adresinde kullanılabilir olacak.

### Ortam Yapılandırması

Frontend dizininde bir `.env.local` dosyası oluşturun:

```env
VITE_API_URL=http://localhost:3005/api
```

Production için, URL'yi deploy edilmiş backend'inize güncelleyin:
```env
VITE_API_URL=https://your-backend.onrender.com/api
```

## Özellikler

### 🎨 Modern UI/UX
- **Responsive Tasarım**: Masaüstü, tablet ve mobilde mükemmel çalışır
- **Pürüzsüz Animasyonlar**: Fade-in, slide-up ve hover efektleri
- **Güzel Bileşenler**: Tutarlı stillendirme ile kartlar, butonlar, formlar
- **Temiz Tema**: Profesyonel renk şeması

### 👥 Kullanıcı Yönetimi
- **Tüm Kullanıcıları Görüntüle**: Kullanıcı kartları ile grid düzeni
- **Kullanıcı Oluştur**: Doğrulama ile modal form
- **Kullanıcı Düzenle**: Gerçek zamanlı güncellemeler ile düzenleme
- **Kullanıcı Sil**: Güvenlik için onay diyalogları
- **Kullanıcı Detayları**: Kullanıcı bilgileri ve gönderileri gösteren özel sayfa

### 📝 Gönderi Yönetimi
- **Tüm Gönderileri Görüntüle**: Filtreleme seçenekleri ile liste görünümü
- **Gönderi Oluştur**: Gönderileri belirli kullanıcılarla ilişkilendir
- **Gönderi Düzenle**: Başlık ve içeriği güncelle
- **Gönderi Sil**: Onay ile güvenli silme
- **Kullanıcı Gönderileri**: Belirli bir kullanıcının tüm gönderilerini görüntüle

### 🔍 Gelişmiş Özellikler
- **Arama İşlevselliği**: Kullanıcı ve gönderileri isim, email veya içeriğe göre ara
- **Filtreleme**: Gönderileri kullanıcıya göre filtrele
- **Gerçek Zamanlı Güncellemeler**: İşlemlerden sonra anında UI güncellemeleri
- **Hata Yönetimi**: Kullanıcı dostu hata mesajları
- **Yükleme Durumları**: Skeleton loader'lar ve spinner'lar

## Teknoloji Yığını

- **React 18**: Hook'lar ve fonksiyonel bileşenlerle en son React
- **TypeScript**: Uygulama genelinde tam tip güvenliği
- **Vite**: Hızlı build aracı ve geliştirme sunucusu
- **Tailwind CSS**: Stilleme için utility-first CSS framework
- **React Router**: İstemci tarafı routing
- **Axios**: API iletişimi için HTTP istemcisi
- **Lucide React**: Güzel, özelleştirilebilir ikonlar

## Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir UI bileşenleri
│   ├── Layout.tsx      # Navigasyon ile ana layout
│   ├── UserList.tsx    # Kullanıcı grid bileşeni
│   ├── UserForm.tsx    # Kullanıcı oluşturma/düzenleme formu
│   ├── PostList.tsx    # Gönderi liste bileşeni
│   └── PostForm.tsx    # Gönderi oluşturma/düzenleme formu
├── pages/              # Sayfa bileşenleri
│   ├── Home.tsx        # Ana sayfa
│   ├── UsersPage.tsx   # Kullanıcı yönetim sayfası
│   ├── PostsPage.tsx   # Gönderi yönetim sayfası
│   └── UserDetail.tsx  # Bireysel kullanıcı sayfası
├── services/           # API servis katmanı
│   ├── api.ts         # Axios yapılandırması
│   ├── userService.ts # Kullanıcı ile ilgili API çağrıları
│   └── postService.ts # Gönderi ile ilgili API çağrıları
├── types/              # TypeScript tip tanımları
│   └── index.ts       # Tüm tip tanımları
├── App.tsx            # Ana uygulama bileşeni
├── App.css            # Global stiller ve Tailwind
└── main.tsx           # Uygulama giriş noktası
```

## Geliştirme Komutları

```bash
# Geliştirme sunucusunu başlat
npm run dev

# Production için build
npm run build

# Production build'i önizle
npm run preview

# Linting çalıştır
npm run lint
```

## Vercel'de Deployment

1. **GitHub repository'nizi** Vercel'e bağlayın
2. **Projeyi yapılandırın:**
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables ayarlayın:**
   - `VITE_API_URL`: Deploy edilmiş backend URL'niz (örn: `https://your-backend.onrender.com/api`)

4. **Deploy edin** - Vercel otomatik olarak uygulamanızı build edip deploy edecek

## API Entegrasyonu

Frontend, iyi yapılandırılmış bir servis katmanı aracılığıyla NestJS backend ile iletişim kurar:

- **Merkezi API Yapılandırması**: Interceptor'larla tek axios instance
- **Tip Güvenli Servisler**: Tüm API çağrıları için tam TypeScript desteği
- **Hata Yönetimi**: Uygulama genelinde tutarlı hata yönetimi
- **Yükleme Durumları**: Daha iyi UX için uygun yükleme göstergeleri

## Responsive Tasarım

Uygulama mobile-first yaklaşımıyla geliştirilmiştir:

- **Breakpoint'ler**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Esnek Layoutlar**: Responsive layoutlar için CSS Grid ve Flexbox
- **Dokunmatik Dostu**: Mobil cihazlarda dokunmatik etkileşimler için optimize edilmiş
- **Performans**: Optimize edilmiş görüntüler ve lazy loading

## Tarayıcı Desteği

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
