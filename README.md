# jihe0479_9103_final-project
Group [Somwrita] -H : Creative coding major project (Individual: Time-Based)
# Creative coding major project
## Name: Popo He | Unikey: jihe0479
### Animation Method: Time-Based
In my individual task, I used Time-Based animation to animate the group's Mondrian-inspired artwork.
### What I implemented:
1. SetInternal()  
I used setInternal() this function to control the timing of color changes.
2. millis()  
In order to develop my Time-Based animation, I explored the official [p5js](https://p5js.org/reference) website and searched for time-related functions.
I found [millis](https://p5js.org/reference/p5/millis/)this function to control timing of color changes and I applied this knowledge in my animation to replace the simple setInterval() logic easier.  
I experimented with three different millis()-related examples provided on the site:
- Startup Time (irrelevant, ugly & unnecessary)
- Running Time (irrelevant, ugly & unnecessary)
- A white circle oscillates left and right on a gray background.(unappealing)  
After testing these different approaches, I found them all unnecessary and unwatchable.
3. scale()  
Before finalizing my time-based animation using setInterval(), I tried to explore to use scale() to let each block change over time. I was inspired by tutorials' examples and wanted to make the rectangles bigger and smaller dynamically.  
However, I found it challenging to put scale()  with my group’s original code structure. After failing several time, I decided to let go of myself.
#### In my final version, I chose to use Time-Based animation by applying setInterval() function.