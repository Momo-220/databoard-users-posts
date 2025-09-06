# Users & Posts API - Backend

**English** | [Türkçe](#türkçe)

A robust REST API built with NestJS and TypeScript for managing users and their posts. This backend service provides full CRUD operations with proper validation, error handling, and CORS support.

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Development
```bash
cd backend
npm install
npm run start:dev
```

The API will be available at `http://localhost:3005/api`

### Production Build
```bash
npm run build
npm run start:prod
```

## Environment Configuration

Create a `.env` file in the backend directory:

```env
PORT=3005
CORS_ORIGIN=*
NODE_ENV=development
```

## API Documentation

**Base URL:** `http://localhost:3005/api`

### Users Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/users` | Get all users | - |
| GET | `/users/:id` | Get user by ID | - |
| POST | `/users` | Create new user | `{name, username, email}` |
| PATCH | `/users/:id` | Update user | `{name?, username?, email?}` |
| DELETE | `/users/:id` | Delete user | - |
| GET | `/users/:id/posts` | Get user's posts | - |
| POST | `/users/:id/posts` | Create post for user | `{title, body?}` |

### Posts Endpoints

| Method | Endpoint | Description | Query Params |
|--------|----------|-------------|--------------|
| GET | `/posts` | Get all posts | `?userId=1` (optional) |
| GET | `/posts/:id` | Get post by ID | - |
| POST | `/posts` | Create new post | `{userId, title, body?}` |
| PATCH | `/posts/:id` | Update post | `{title?, body?}` |
| DELETE | `/posts/:id` | Delete post | - |

## Example Usage

### Create a new user
```bash
curl -X POST http://localhost:3005/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","username":"johndoe","email":"john@example.com"}'
```

### Create a post for a specific user
```bash
curl -X POST http://localhost:3005/api/users/1/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"My First Post","body":"This is the content of my post"}'
```

### Get all posts for a user
```bash
curl http://localhost:3005/api/users/1/posts
```

## Project Structure

```
src/
├── users/
│   ├── dtos/           # Data Transfer Objects
│   ├── interfaces/     # TypeScript interfaces
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── posts/
│   ├── dtos/
│   ├── interfaces/
│   ├── posts.controller.ts
│   ├── posts.service.ts
│   └── posts.module.ts
├── app.module.ts
└── main.ts
```

## Deployment on Render

1. **Connect your GitHub repository** to Render
2. **Configure the web service:**
   - Build Command: `npm ci && npm run build`
   - Start Command: `npm run start:prod`
   - Environment Variables:
     - `NODE_ENV=production`
     - `CORS_ORIGIN=https://your-frontend-url.vercel.app`

3. **Deploy** - Render will provide a public URL like `https://your-app.onrender.com`

## Development Commands

```bash
# Development server with hot reload
npm run start:dev

# Production build
npm run build

# Run production server
npm run start:prod

# Run tests
npm run test

# Run e2e tests
npm run test:e2e

# Lint code
npm run lint
```

## Sample Data

The API comes with pre-loaded sample data:

**Users:**
- Lea Dupont (lea01) - lea.dupont@example.com
- Ousmane Touré (ousmanet) - ousmane.toure@example.com
- Sara Ibrahim (sara_i) - sara.ibrahim@example.com

**Posts:**
- Sample posts linked to users via userId relationships

---

# Kullanıcılar ve Gönderiler API - Backend

**Türkçe** | [English](#users--posts-api---backend)

Kullanıcıları ve gönderilerini yönetmek için NestJS ve TypeScript ile geliştirilmiş sağlam bir REST API. Bu backend servisi, uygun doğrulama, hata yönetimi ve CORS desteği ile tam CRUD işlemleri sağlar.

## Hızlı Başlangıç

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Kurulum ve Geliştirme
```bash
cd backend
npm install
npm run start:dev
```

API `http://localhost:3005/api` adresinde kullanılabilir olacak.

### Production Build
```bash
npm run build
npm run start:prod
```

## Ortam Yapılandırması

Backend dizininde bir `.env` dosyası oluşturun:

```env
PORT=3005
CORS_ORIGIN=*
NODE_ENV=development
```

## API Dokümantasyonu

**Base URL:** `http://localhost:3005/api`

### Kullanıcı Endpoint'leri

| Method | Endpoint | Açıklama | Request Body |
|--------|----------|----------|--------------|
| GET | `/users` | Tüm kullanıcıları getir | - |
| GET | `/users/:id` | ID'ye göre kullanıcı getir | - |
| POST | `/users` | Yeni kullanıcı oluştur | `{name, username, email}` |
| PATCH | `/users/:id` | Kullanıcıyı güncelle | `{name?, username?, email?}` |
| DELETE | `/users/:id` | Kullanıcıyı sil | - |
| GET | `/users/:id/posts` | Kullanıcının gönderilerini getir | - |
| POST | `/users/:id/posts` | Kullanıcı için gönderi oluştur | `{title, body?}` |

### Gönderi Endpoint'leri

| Method | Endpoint | Açıklama | Query Parametreleri |
|--------|----------|----------|-------------------|
| GET | `/posts` | Tüm gönderileri getir | `?userId=1` (opsiyonel) |
| GET | `/posts/:id` | ID'ye göre gönderi getir | - |
| POST | `/posts` | Yeni gönderi oluştur | `{userId, title, body?}` |
| PATCH | `/posts/:id` | Gönderiyi güncelle | `{title?, body?}` |
| DELETE | `/posts/:id` | Gönderiyi sil | - |

## Örnek Kullanım

### Yeni kullanıcı oluştur
```bash
curl -X POST http://localhost:3005/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ahmet Yılmaz","username":"ahmety","email":"ahmet@example.com"}'
```

### Belirli bir kullanıcı için gönderi oluştur
```bash
curl -X POST http://localhost:3005/api/users/1/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"İlk Gönderim","body":"Bu benim ilk gönderimin içeriği"}'
```

### Bir kullanıcının tüm gönderilerini getir
```bash
curl http://localhost:3005/api/users/1/posts
```

## Proje Yapısı

```
src/
├── users/
│   ├── dtos/           # Veri Transfer Nesneleri
│   ├── interfaces/     # TypeScript arayüzleri
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── posts/
│   ├── dtos/
│   ├── interfaces/
│   ├── posts.controller.ts
│   ├── posts.service.ts
│   └── posts.module.ts
├── app.module.ts
└── main.ts
```

## Render'da Deployment

1. **GitHub repository'nizi** Render'a bağlayın
2. **Web servisini yapılandırın:**
   - Build Command: `npm ci && npm run build`
   - Start Command: `npm run start:prod`
   - Environment Variables:
     - `NODE_ENV=production`
     - `CORS_ORIGIN=https://frontend-url.vercel.app`

3. **Deploy edin** - Render `https://your-app.onrender.com` gibi bir public URL sağlayacak

## Geliştirme Komutları

```bash
# Hot reload ile geliştirme sunucusu
npm run start:dev

# Production build
npm run build

# Production sunucusunu çalıştır
npm run start:prod

# Testleri çalıştır
npm run test

# E2E testleri çalıştır
npm run test:e2e

# Kod linting
npm run lint
```

## Örnek Veriler

API önceden yüklenmiş örnek verilerle gelir:

**Kullanıcılar:**
- Lea Dupont (lea01) - lea.dupont@example.com
- Ousmane Touré (ousmanet) - ousmane.toure@example.com
- Sara Ibrahim (sara_i) - sara.ibrahim@example.com

**Gönderiler:**
- userId ilişkileri aracılığıyla kullanıcılara bağlı örnek gönderiler