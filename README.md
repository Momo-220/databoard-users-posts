# DataBoard - Users & Posts Management System

**English** | [Türkçe](#kullanıcılar-ve-gönderiler-yönetim-sistemi)

A full-stack web application for managing users and their posts. Built with modern technologies and best practices, featuring a robust backend API and a beautiful, responsive frontend interface.

## 🚀 Live Demo

- **Frontend**: [https://databoardusersposts.vercel.app/](https://databoardusersposts.vercel.app/)
- **Backend API**: [https://databoard-users-posts.onrender.com/api](https://databoard-users-posts.onrender.com/api)

## 📋 Project Overview

This project demonstrates a complete full-stack development workflow with:

- **Backend**: NestJS API with TypeScript, providing RESTful endpoints
- **Frontend**: React application with TypeScript and Tailwind CSS
- **Database**: In-memory data storage (no external database required)
- **Deployment**: Backend on Render, Frontend on Vercel

## 🏗️ Architecture

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐
│                 │ ◄─────────────► │                 │
│   React Frontend│                 │  NestJS Backend │
│   (Port 5173)   │                 │   (Port 3005)   │
│                 │                 │                 │
└─────────────────┘                 └─────────────────┘
```

## 🛠️ Technology Stack

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **class-validator** - Validation decorators
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Full type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
davinci/
├── backend/                 # NestJS API
│   ├── src/
│   │   ├── users/          # User module
│   │   ├── posts/          # Post module
│   │   └── main.ts         # Application entry point
│   ├── package.json
│   └── README.md
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── types/         # TypeScript types
│   ├── package.json
│   └── README.md
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
npm run start:dev
```
Backend will be available at `http://localhost:3005/api`

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend will be available at `http://localhost:5173`

## 📚 API Documentation

### Base URL
`http://localhost:3005/api`

### Users Endpoints
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user
- `GET /users/:id/posts` - Get user's posts
- `POST /users/:id/posts` - Create post for user

### Posts Endpoints
- `GET /posts` - Get all posts
- `GET /posts?userId=1` - Get posts by user
- `GET /posts/:id` - Get post by ID
- `POST /posts` - Create new post
- `PATCH /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post

## 🎨 Features

### User Management
- ✅ Create, read, update, delete users
- ✅ User profile with avatar
- ✅ Search and filter functionality
- ✅ Responsive user cards

### Post Management
- ✅ Create, read, update, delete posts
- ✅ Associate posts with users
- ✅ Rich text content support
- ✅ Post filtering by user

### UI/UX Features
- ✅ Modern, responsive design
- ✅ Smooth animations and transitions
- ✅ Loading states and error handling
- ✅ Mobile-first approach
- ✅ Dark/light theme support

## 🚀 Deployment

### Backend (Render)
1. Connect GitHub repository to Render
2. Set build command: `npm ci && npm run build`
3. Set start command: `npm run start:prod`
4. Configure environment variables

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set root directory to `frontend`
3. Set build command: `npm run build`
4. Set output directory to `dist`
5. Configure environment variables

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm run test          # Unit tests
npm run test:e2e      # End-to-end tests
npm run lint          # Code linting
```

### Frontend Testing
```bash
cd frontend
npm run lint          # Code linting
npm run build         # Production build test
```

## 📖 Documentation

- [Backend Documentation](./backend/README.md)
- [Frontend Documentation](./frontend/README.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

# Kullanıcılar ve Gönderiler Yönetim Sistemi

**Türkçe** | [English](#users--posts-management-system)

Kullanıcıları ve gönderilerini yönetmek için geliştirilmiş full-stack web uygulaması. Modern teknolojiler ve en iyi uygulamalarla geliştirilmiş, sağlam bir backend API ve güzel, responsive frontend arayüzüne sahip.

## 🚀 Canlı Demo

- **Frontend**: [Vercel'de Deploy Edildi](https://your-frontend.vercel.app)
- **Backend API**: [Render'da Deploy Edildi](https://your-backend.onrender.com)

## 📋 Proje Genel Bakış

Bu proje, aşağıdakilerle tam bir full-stack geliştirme iş akışını gösterir:

- **Backend**: TypeScript ile NestJS API, RESTful endpoint'ler sağlar
- **Frontend**: TypeScript ve Tailwind CSS ile React uygulaması
- **Veritabanı**: Bellek içi veri depolama (harici veritabanı gerekmez)
- **Deployment**: Backend Render'da, Frontend Vercel'de

## 🏗️ Mimari

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐
│                 │ ◄─────────────► │                 │
│   React Frontend│                 │  NestJS Backend │
│   (Port 5173)   │                 │   (Port 3005)   │
│                 │                 │                 │
└─────────────────┘                 └─────────────────┘
```

## 🛠️ Teknoloji Yığını

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Tip güvenli JavaScript
- **class-validator** - Validation decorator'ları
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - Hook'larla modern React
- **TypeScript** - Tam tip güvenliği
- **Vite** - Hızlı build aracı ve dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - İstemci tarafı routing
- **Axios** - HTTP istemcisi
- **Lucide React** - Güzel ikonlar

## 📁 Proje Yapısı

```
davinci/
├── backend/                 # NestJS API
│   ├── src/
│   │   ├── users/          # Kullanıcı modülü
│   │   ├── posts/          # Gönderi modülü
│   │   └── main.ts         # Uygulama giriş noktası
│   ├── package.json
│   └── README.md
├── frontend/               # React uygulaması
│   ├── src/
│   │   ├── components/     # Yeniden kullanılabilir bileşenler
│   │   ├── pages/         # Sayfa bileşenleri
│   │   ├── services/      # API servisleri
│   │   └── types/         # TypeScript tipleri
│   ├── package.json
│   └── README.md
└── README.md              # Bu dosya
```

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Backend Kurulumu
```bash
cd backend
npm install
npm run start:dev
```
Backend `http://localhost:3005/api` adresinde kullanılabilir olacak.

### Frontend Kurulumu
```bash
cd frontend
npm install
npm run dev
```
Frontend `http://localhost:5173` adresinde kullanılabilir olacak.

## 📚 API Dokümantasyonu

### Base URL
`http://localhost:3005/api`

### Kullanıcı Endpoint'leri
- `GET /users` - Tüm kullanıcıları getir
- `GET /users/:id` - ID'ye göre kullanıcı getir
- `POST /users` - Yeni kullanıcı oluştur
- `PATCH /users/:id` - Kullanıcıyı güncelle
- `DELETE /users/:id` - Kullanıcıyı sil
- `GET /users/:id/posts` - Kullanıcının gönderilerini getir
- `POST /users/:id/posts` - Kullanıcı için gönderi oluştur

### Gönderi Endpoint'leri
- `GET /posts` - Tüm gönderileri getir
- `GET /posts?userId=1` - Kullanıcıya göre gönderileri getir
- `GET /posts/:id` - ID'ye göre gönderi getir
- `POST /posts` - Yeni gönderi oluştur
- `PATCH /posts/:id` - Gönderiyi güncelle
- `DELETE /posts/:id` - Gönderiyi sil

## 🎨 Özellikler

### Kullanıcı Yönetimi
- ✅ Kullanıcı oluştur, oku, güncelle, sil
- ✅ Avatar ile kullanıcı profili
- ✅ Arama ve filtreleme işlevselliği
- ✅ Responsive kullanıcı kartları

### Gönderi Yönetimi
- ✅ Gönderi oluştur, oku, güncelle, sil
- ✅ Gönderileri kullanıcılarla ilişkilendir
- ✅ Zengin metin içerik desteği
- ✅ Kullanıcıya göre gönderi filtreleme

### UI/UX Özellikleri
- ✅ Modern, responsive tasarım
- ✅ Pürüzsüz animasyonlar ve geçişler
- ✅ Yükleme durumları ve hata yönetimi
- ✅ Mobile-first yaklaşım
- ✅ Koyu/açık tema desteği

## 🚀 Deployment

### Backend (Render)
1. GitHub repository'yi Render'a bağla
2. Build komutunu ayarla: `npm ci && npm run build`
3. Start komutunu ayarla: `npm run start:prod`
4. Environment variable'ları yapılandır

### Frontend (Vercel)
1. GitHub repository'yi Vercel'e bağla
2. Root directory'yi `frontend` olarak ayarla
3. Build komutunu ayarla: `npm run build`
4. Output directory'yi `dist` olarak ayarla
5. Environment variable'ları yapılandır

## 🧪 Test

### Backend Test
```bash
cd backend
npm run test          # Unit testler
npm run test:e2e      # End-to-end testler
npm run lint          # Kod linting
```

### Frontend Test
```bash
cd frontend
npm run lint          # Kod linting
npm run build         # Production build test
```

## 📖 Dokümantasyon

- [Backend Dokümantasyonu](./backend/README.md)
- [Frontend Dokümantasyonu](./frontend/README.md)

## 🤝 Katkıda Bulunma

1. Repository'yi fork edin
2. Feature branch oluşturun
3. Değişikliklerinizi yapın
4. Uygunsa test ekleyin
5. Pull request gönderin

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.
