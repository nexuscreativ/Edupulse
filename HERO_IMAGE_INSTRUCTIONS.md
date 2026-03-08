# Hero Background Image Instructions

## Current Status
The hero section has been set up with an animated background, but I was unable to generate the image due to API quota limits.

## To Add Your Own Image:

1. **Find or create an image** of African students in a classroom setting
   - Recommended dimensions: 1920x1080px or larger
   - Format: JPG or PNG
   - The image should show diverse Nigerian students engaged in learning

2. **Save the image** as `hero-students.jpg` in the `public` folder:
   ```
   c:\Users\WebWorka\Projects\edupulse\pulse\public\hero-students.jpg
   ```

3. **Update the code** in `src/app/page.tsx` (around line 42-44):
   
   Replace the current placeholder gradient with:
   ```tsx
   <div 
     className="absolute inset-0 bg-cover bg-center animate-slow-pan"
     style={{
       backgroundImage: `url('/hero-students.jpg')`,
       animation: 'slowPan 30s ease-in-out infinite alternate'
     }}
   />
   <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
   ```

## Alternative: Use a Stock Photo Service
- **Unsplash**: Search for "African students classroom"
- **Pexels**: Search for "Nigerian school students"
- **Pixabay**: Free images of students

The overlay gradient will ensure text remains readable regardless of the image you choose.
