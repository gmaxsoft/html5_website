// Bootstrap Dropdown and Tabs initialization
document.addEventListener('DOMContentLoaded', () => {
    // Wait for bootstrap to be available
    if (typeof bootstrap === 'undefined') {
        console.error('Bootstrap is not loaded');
        return;
    }

    // Initialize Bootstrap Tabs - Bootstrap initializes automatically with data-bs-toggle="tab"
    const tabTriggerList = document.querySelectorAll('[data-bs-toggle="tab"]');
    tabTriggerList.forEach(tabTriggerEl => {
        if (bootstrap.Tab) {
            new bootstrap.Tab(tabTriggerEl);
        }
    });

    // Restaurant Tabs - Handle image and overlay content changes
    const restaurantTabContainer = document.getElementById('restaurantTabs');
    if (restaurantTabContainer) {
        restaurantTabContainer.addEventListener('shown.bs.tab', (event) => {
            const targetId = event.target.getAttribute('data-bs-target');
            if (targetId) {
                handleRestaurantTabChange(targetId);
            }
        });
    }

    // Specifications Tabs - Handle content and image changes
    const specificationsTabContainer = document.getElementById('specificationsTabs');
    if (specificationsTabContainer) {
        specificationsTabContainer.addEventListener('shown.bs.tab', (event) => {
            const targetId = event.target.getAttribute('data-bs-target');
            if (targetId) {
                handleSpecificationsTabChange(targetId);
            }
        });
    }

    // Handle Specifications Tab Changes - Smooth transitions for content and images
    function handleSpecificationsTabChange(targetId) {
        // Get all floor plan images
        const allFloorPlans = document.querySelectorAll('.specifications-floor-plan');

        // Fade out all images
        allFloorPlans.forEach(img => {
            img.style.opacity = '0.5';
            img.style.transition = 'opacity 0.3s ease';
        });

        // Get the active tab pane to find corresponding image
        const activePane = document.querySelector(targetId);
        if (activePane) {
            const activeImage = activePane.querySelector('.specifications-floor-plan');
            if (activeImage) {
                // Fade in the active image
                setTimeout(() => {
                    activeImage.style.opacity = '1';
                }, 150);
            }
        }
    }

    // Initialize first specifications tab image opacity
    const firstSpecTabPane = document.querySelector('#parter-content');
    if (firstSpecTabPane) {
        const firstSpecImage = firstSpecTabPane.querySelector('.specifications-floor-plan');
        if (firstSpecImage) {
            firstSpecImage.style.opacity = '1';
        }
    }

    // Set initial opacity for other specifications images
    const otherSpecImages = document.querySelectorAll('.specifications-floor-plan:not(#parter-plan)');
    otherSpecImages.forEach(img => {
        img.style.opacity = '0.5';
    });

    // Handle Restaurant Tab Changes - Change images and overlay content with smooth transition
    function handleRestaurantTabChange(targetId) {
        // Get the active tab ID (remove # if present)
        const activeTabId = targetId.replace('#', '');

        // Get all hero images and overlay content
        const allImages = document.querySelectorAll('.hero-bg-image');
        const allOverlayContent = document.querySelectorAll('.overlay-content');

        // Hide all images and overlay content with fade out
        allImages.forEach(img => {
            img.classList.remove('active');
        });

        allOverlayContent.forEach(content => {
            content.classList.remove('active');
        });

        // Show active image and overlay content with fade in
        const activeImage = document.querySelector(`.hero-bg-image[data-tab="${activeTabId}"]`);
        const activeOverlay = document.querySelector(`#overlay-${activeTabId}`);

        if (activeImage) {
            setTimeout(() => {
                activeImage.classList.add('active');
            }, 150);
        }

        if (activeOverlay) {
            setTimeout(() => {
                activeOverlay.classList.add('active');
            }, 200);
        }
    }

    // Initialize first tab image and overlay visibility on page load
    const firstImage = document.querySelector('.hero-bg-image[data-tab="restaurant-content"]');
    const firstOverlay = document.querySelector('#overlay-restaurant-content');

    if (firstImage) {
        firstImage.classList.add('active');
    }

    if (firstOverlay) {
        firstOverlay.classList.add('active');
    }

    // Initialize Bootstrap Dropdowns - but don't show them automatically
    const dropdownToggleList = document.querySelectorAll('[data-bs-toggle="dropdown"]');
    dropdownToggleList.forEach(dropdownToggleEl => {
        if (bootstrap.Dropdown) {
            // Initialize dropdown but keep it hidden - will be shown on hover or click
            const dropdown = bootstrap.Dropdown.getOrCreateInstance(dropdownToggleEl, {
                autoClose: true
            });
            // Ensure dropdown starts hidden
            dropdown.hide();
        }
    });

    // Desktop: hover to show dropdown (only for desktop > 968px)
    // Mobile: click to toggle (handled automatically by Bootstrap via data-bs-toggle)
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');

        if (!dropdownToggle || !bootstrap.Dropdown) return;

        // Only add hover for desktop (> 968px)
        if (window.innerWidth > 968) {
            dropdown.addEventListener('mouseenter', () => {
                const bsDropdown = bootstrap.Dropdown.getInstance(dropdownToggle) || bootstrap.Dropdown.getOrCreateInstance(dropdownToggle);
                if (bsDropdown) {
                    bsDropdown.show();
                }
            });

            dropdown.addEventListener('mouseleave', () => {
                const bsDropdown = bootstrap.Dropdown.getInstance(dropdownToggle);
                if (bsDropdown) {
                    bsDropdown.hide();
                }
            });
        }
    });

    // Initialize Swiper for News Slider
    if (typeof window.Swiper !== 'undefined' && window.SwiperModules) {
        const { Pagination, Autoplay } = window.SwiperModules;
        const Swiper = window.Swiper;

        // Hero Slider (Full-screen hero section)
        const heroSliderEl = document.getElementById('heroSlider');
        if (heroSliderEl) {
            const { EffectFade } = window.SwiperModules;
            new Swiper('#heroSlider', {
                // Configure Swiper to use modules
                modules: [Pagination, Autoplay, EffectFade],

                // Optional parameters
                loop: true,
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 800,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },

                // Autoplay
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },

                // Pagination
                pagination: {
                    el: heroSliderEl.querySelector('.swiper-pagination'),
                    clickable: true,
                    dynamicBullets: false,
                },
            });
        }

        // News Slider
        const newsSliderEl = document.getElementById('newsSlider');
        if (newsSliderEl) {
            new Swiper('#newsSlider', {
                // Configure Swiper to use modules
                modules: [Pagination, Autoplay],

                // Optional parameters
                loop: true,
                slidesPerView: 1,
                spaceBetween: 30,
                speed: 600,

                // Autoplay
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },

                // Pagination
                pagination: {
                    el: newsSliderEl.querySelector('.swiper-pagination'),
                    clickable: true,
                    dynamicBullets: false,
                },

                // Responsive breakpoints
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            });
        }

        // Attractions Slider (3 cards visible, 6 total)
        const attractionsSliderEl = document.getElementById('attractionsSlider');
        if (attractionsSliderEl) {
            new Swiper('#attractionsSlider', {
                // Configure Swiper to use modules
                modules: [Pagination, Autoplay],

                // Optional parameters
                loop: true,
                slidesPerView: 3,
                spaceBetween: 30,
                speed: 600,

                // Autoplay
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },

                // Pagination
                pagination: {
                    el: attractionsSliderEl.querySelector('.swiper-pagination'),
                    clickable: true,
                    dynamicBullets: false,
                },

                // Responsive breakpoints
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            });
        }
    } else {
        console.warn('Swiper not loaded properly');
    }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a non-dropdown link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 968) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Close dropdown when clicking on dropdown menu link
const dropdownMenuLinks = document.querySelectorAll('.dropdown-menu a');
dropdownMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 968) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Smooth scroll for navigation links (only for anchor links, not for page links)
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Only prevent default and use smooth scroll for anchor links (#)
        // Allow normal navigation for page links (.html)
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        // For links to other pages (.html), allow normal navigation (don't call preventDefault)
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values (support both old and new field IDs)
        const name = document.getElementById('contactName')?.value || document.getElementById('name')?.value;
        const email = document.getElementById('contactEmail')?.value || document.getElementById('email')?.value;
        const phone = document.getElementById('contactPhone')?.value || document.getElementById('phone')?.value;
        const subject = document.getElementById('contactSubject')?.value || document.getElementById('subject')?.value;
        const message = document.getElementById('contactMessage')?.value || document.getElementById('message')?.value;

        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Proszę wypełnić wszystkie wymagane pola formularza.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Proszę podać poprawny adres email.');
            return;
        }

        // Simulate form submission
        alert(`Dziękujemy za wiadomość, ${name}! Skontaktujemy się z Tobą wkrótce na adres ${email}.`);

        // Reset form
        contactForm.reset();
    });
}

// Gallery hover effects and lightbox (optional)
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function () {
            // Could open in lightbox or full size
            window.open(this.src, '_blank');
        });
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation (for future use)
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .news-card');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// News card button interactions
document.addEventListener('DOMContentLoaded', () => {
    const newsButtons = document.querySelectorAll('.news-btn');

    newsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const href = button.getAttribute('href');

            // Jeśli link jest do anchor (#), użyj smooth scroll
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // Jeśli link jest do podstrony (.html), pozwól na normalną nawigację (nie wywołuj preventDefault)
            // Domyślnie przeglądarka przejdzie do podstrony
        });
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('contactName')?.value;
            const email = document.getElementById('contactEmail')?.value;
            const phone = document.getElementById('contactPhone')?.value;
            const subject = document.getElementById('contactSubject')?.value;
            const message = document.getElementById('contactMessage')?.value;

            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Proszę wypełnić wszystkie wymagane pola.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Proszę podać prawidłowy adres email.');
                return;
            }

            // Here you would normally send the form data to a server
            // For now, just show a success message
            alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
            contactForm.reset();
        });
    }

    // Gallery hover effects
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function () {
            // Could open in lightbox or full size
            window.open(this.src, '_blank');
        });
    });
});

// Add scroll-to-top functionality (optional enhancement)
let scrollTopBtn;

function createScrollTopButton() {
    scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = '';

    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
}

// Initialize scroll-to-top button
createScrollTopButton();

// Initialize parallax with @maxsoft/super-parallax
document.addEventListener('DOMContentLoaded', () => {
    const prlx = new Parallax({
        speed: 0.3
    });
});

