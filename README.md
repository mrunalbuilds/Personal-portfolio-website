# Mrunal Joshi - Portfolio Website

A modern, responsive portfolio website showcasing cloud platform engineering and DevOps experience.

## Features

- Clean, professional design
- Fully responsive (mobile, tablet, desktop)
- Smooth scrolling navigation
- Animated project cards and skill sections
- Fast loading static site
- No external dependencies

## Quick Start

### View Locally

Simply open `index.html` in your web browser:

```bash
cd portfolio
open index.html  # macOS
# or
xdg-open index.html  # Linux
# or double-click index.html in File Explorer (Windows)
```

### Using a Local Server

For a better development experience:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Create a new GitHub repository (e.g., `mrunal-joshi.github.io`)
2. Push your portfolio files:

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

3. Go to repository Settings > Pages
4. Set source to "main" branch, root directory
5. Your site will be live at `https://YOUR_USERNAME.github.io`

### Option 2: AWS S3 + CloudFront

```bash
# Create S3 bucket
aws s3 mb s3://mrunal-portfolio --region us-east-1

# Upload files
aws s3 sync . s3://mrunal-portfolio --exclude ".git/*" --exclude "README.md"

# Enable static website hosting
aws s3 website s3://mrunal-portfolio --index-document index.html

# Set bucket policy for public read access
aws s3api put-bucket-policy --bucket mrunal-portfolio --policy file://bucket-policy.json
```

Then configure CloudFront for HTTPS and custom domain.

### Option 3: Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the `portfolio` folder to Netlify dashboard
3. Your site is live instantly
4. Optional: Configure custom domain

### Option 4: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd portfolio
vercel
```

### Option 5: GitLab Pages

1. Create `.gitlab-ci.yml` in portfolio directory:

```yaml
pages:
  stage: deploy
  script:
    - mkdir public
    - cp -r * public/
  artifacts:
    paths:
      - public
  only:
    - main
```

2. Push to GitLab and your site will be at `https://YOUR_USERNAME.gitlab.io/portfolio`

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Styles
├── js/
│   └── script.js       # JavaScript for interactions
├── assets/             # Images, PDFs (optional)
└── README.md           # This file
```

## Customization

### Update Content

Edit `index.html` to update:
- Personal information
- Projects
- Skills
- Experience
- Contact details

### Modify Styling

Edit `css/style.css` to customize:
- Colors (see CSS variables in `:root`)
- Fonts
- Spacing
- Layout

### Color Scheme

Current color scheme uses these CSS variables in `style.css`:

```css
--primary-color: #2563eb;      /* Blue */
--primary-dark: #1e40af;       /* Dark blue */
--secondary-color: #64748b;    /* Gray */
--text-primary: #1e293b;       /* Dark gray */
--text-secondary: #475569;     /* Medium gray */
```

Change these to customize the entire color scheme.

## Adding a Custom Domain

### GitHub Pages

1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. Add `CNAME` file to portfolio root with your domain:
   ```
   mrunaljoshi.dev
   ```
3. Configure DNS records at your registrar:
   - Add A records pointing to GitHub Pages IPs
   - Or add CNAME record pointing to `YOUR_USERNAME.github.io`
4. Enable custom domain in GitHub Pages settings

### AWS S3 + CloudFront

1. Request SSL certificate in ACM (us-east-1 region)
2. Create CloudFront distribution pointing to S3 bucket
3. Add custom domain as alternate domain name
4. Update DNS to point to CloudFront distribution

## Performance Optimization

The site is already optimized:
- No external dependencies
- Minimal CSS and JS
- Native browser features for animations
- Semantic HTML for SEO

Optional improvements:
- Compress images (if you add any)
- Minify CSS and JS for production
- Add Open Graph meta tags for social sharing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This portfolio template is free to use and modify for your personal portfolio.

## Contact

Mrunal Joshi
- Email: mrunalj1120@gmail.com
- LinkedIn: [linkedin.com/in/mrunal-joshi2011](https://linkedin.com/in/mrunal-joshi2011)
- Phone: +91-9325614521
