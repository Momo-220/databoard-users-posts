# Deployment Guide

## Backend Deployment (Render)

### Step 1: Prepare Repository
1. Push your code to GitHub
2. Ensure backend folder is in the root of your repository

### Step 2: Deploy on Render
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `users-posts-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm ci && npm run build`
   - **Start Command**: `npm run start:prod`

### Step 3: Environment Variables
Add these environment variables in Render dashboard:
```
NODE_ENV=production
CORS_ORIGIN=https://your-frontend.vercel.app
PORT=10000
```

### Step 4: Deploy
Click "Create Web Service" and wait for deployment.

## Frontend Deployment (Vercel)

### Step 1: Prepare Repository
1. Ensure frontend folder is in the root of your repository
2. Update `.env.local` with your backend URL after backend deployment

### Step 2: Deploy on Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 3: Environment Variables
Add this environment variable in Vercel dashboard:
```
VITE_API_URL=https://your-backend.onrender.com/api
```

### Step 4: Deploy
Click "Deploy" and wait for deployment.

## Post-Deployment Steps

### Update Backend CORS
After frontend deployment, update the backend CORS_ORIGIN environment variable in Render:
```
CORS_ORIGIN=https://your-frontend.vercel.app
```

### Test the Application
1. Visit your frontend URL
2. Test user creation, editing, and deletion
3. Test post creation and management
4. Verify all CRUD operations work correctly

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure CORS_ORIGIN is set correctly in backend
   - Check that frontend URL matches exactly

2. **Build Failures**
   - Check that all dependencies are in package.json
   - Ensure TypeScript compilation passes
   - Run `npm run lint` locally first

3. **API Connection Issues**
   - Verify VITE_API_URL is set correctly
   - Check that backend is running and accessible
   - Test API endpoints directly

### Useful Commands

```bash
# Test backend locally
curl http://localhost:3005/api/users

# Test frontend build
cd frontend
npm run build

# Check for linting errors
npm run lint
```

## URLs After Deployment

- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-project.onrender.com`
- **API Base**: `https://your-project.onrender.com/api`
