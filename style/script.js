 // Dark/Light mode toggle
        const modeToggle = document.getElementById('modeToggle');
        const body = document.body;
        
        // Check for saved user preference or use system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const currentMode = localStorage.getItem('mode') || (prefersDark ? 'dark' : 'light');
        
        // Apply the saved mode
        if (currentMode === 'dark') {
            body.classList.add('dark-mode');
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        modeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            // Update icon and save preference
            if (body.classList.contains('dark-mode')) {
                modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('mode', 'dark');
            } else {
                modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('mode', 'light');
            }
        });

      
  function showImage(el) {
    const modalImg = document.getElementById('modalImage');
    modalImg.src = el.src;
  }