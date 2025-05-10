import './style.css'
import.meta.glob('./section/**/*.css', { eager: true });

const jsModules = import.meta.glob('./section/**/*.js');

for (const path in jsModules) {
    jsModules[path]();
}