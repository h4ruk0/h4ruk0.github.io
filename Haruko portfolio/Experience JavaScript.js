// Animate timeline items as they come into view
const timelineItems = document.querySelectorAll('.timeline-item');

function checkTimelineAnimation() {
    const triggerBottom = window.innerHeight / 5 * 4;
    
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        
        if (itemTop < triggerBottom) {
            item.classList.add('in-view');
        }
    });
}

// Initial check
checkTimelineAnimation();

// Check on scroll
window.addEventListener('scroll', checkTimelineAnimation);