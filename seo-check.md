# SEO Checklist for Google Indexing

## After Deploying, Check These:

### 1. Verify Files Are Accessible
- [ ] Visit: https://www.jancarloespiritu.com/robots.txt
  - Should show: `User-agent: *` and `Allow: /`

- [ ] Visit: https://www.jancarloespiritu.com/sitemap.xml
  - Should show XML with all your pages

### 2. Test in Google Search Console

#### URL Inspection Tool
1. Enter: `https://www.jancarloespiritu.com/`
2. Click "Test Live URL"
3. Wait for test to complete
4. Check for errors:
   - ✅ Should see "URL is available to Google"
   - ❌ If DNS error: Domain not reachable
   - ❌ If 4xx/5xx: Server errors
   - ❌ If soft 404: Page appears empty

#### View Crawled Page
1. After testing, click "View Tested Page"
2. Check "Screenshot" tab - should show your portfolio
3. Check "More Info" tab:
   - Status: Should be 200
   - Indexability: Should say "Indexable"

### 3. Submit for Indexing
Once test passes:
1. Click "Request Indexing"
2. Wait 1-7 days for Google to index
3. Check by searching: `site:www.jancarloespiritu.com`

### 4. Submit Sitemap
1. Go to "Sitemaps" section
2. Enter: `sitemap.xml`
3. Click Submit

## Improvements Made

✅ Comprehensive meta tags with keywords
✅ Open Graph tags for social sharing
✅ Twitter Card tags
✅ JSON-LD structured data (Schema.org Person)
✅ Semantic HTML with proper heading hierarchy
✅ Server-side rendering enabled
✅ Sitemap.xml auto-generated
✅ Robots.txt allowing all crawlers
✅ Hidden content layer for crawlers
✅ Noscript fallback
✅ Performance optimizations in next.config.ts

## Common Issues & Solutions

### DNS Error: Host Unknown
- **Cause**: Domain not properly configured
- **Fix**: Verify domain in Vercel settings, wait 24-48h for DNS propagation

### Soft 404
- **Cause**: Page appears empty to Google
- **Fix**: Now resolved with semantic HTML layer and SSR

### Robots.txt Blocking
- **Cause**: Accidentally blocking crawlers
- **Fix**: Already configured to allow all

### No Structured Data
- **Cause**: Missing schema markup
- **Fix**: Added JSON-LD Person schema

## Timeline
- **Immediate**: Site is crawlable
- **1-3 days**: Initial indexing
- **1-2 weeks**: Full indexing with all pages
- **2-4 weeks**: Rankings improve

## Speed Up Indexing
1. Share portfolio on LinkedIn
2. Add to your GitHub profile
3. List on dev.to, Hashnode, or Medium
4. Submit to developer directories
5. Get backlinks from other sites
