import { Story } from '../types'

export const stories: Story[] = [
  {
    id: 'airbnb-photography',
    title: "The $40 Camera That Built a $75B Company",
    company: 'Airbnb',
    color: '#FF5A5F',
    tags: ['Growth Hacking', 'Marketplace', 'Trust'],
    addedDate: '2024-01-15',
    slides: [
      {
        type: 'hook',
        headline: "The $40 Camera That Built a $75B Company",
        body: "In 2009, Airbnb was dying. They had 40 listings in New York and almost no bookings. The founders were $40,000 in debt, burning through savings selling novelty cereal boxes. Then Brian Chesky had a hunch.",
        stat: '~$0',
        statLabel: 'weekly NYC revenue before the fix',
      },
      {
        type: 'context',
        headline: "The Real Problem Wasn't the Product",
        body: "Airbnb's listings looked terrible. Hosts were using dim, blurry cell phone photos shot from awkward angles at bad times of day. The product worked—but nobody could see it working. Trust was broken at the very first impression, before anyone ever clicked 'Book.'",
      },
      {
        type: 'move',
        headline: "The Un-Scalable Solution",
        body: "Chesky flew to New York, rented a camera, and personally photographed 40 listings. No algorithm. No crowdsourcing. No AI. Just a founder with a camera, apartment by apartment. Paul Graham would later call this pattern 'doing things that don't scale.'",
        stat: '$5K',
        statLabel: 'camera rental on a credit card',
      },
      {
        type: 'outcome',
        headline: "Revenue Doubled in One Week",
        body: "Within a week, New York bookings doubled. They replicated the model city by city by hiring freelance photographers, then launched a free professional photography program for all hosts. Quality visuals became core to the marketplace trust loop.",
        stat: '2×',
        statLabel: 'weekly revenue in one week',
      },
      {
        type: 'insight',
        headline: "Unblock the Bottleneck, Not the Scale",
        body: "The lesson wasn't 'hire photographers forever.' It was that the trust bottleneck was photos. Once they knew that, they could solve it at scale. The un-scalable experiment revealed the scalable fix. Find what's blocking conversion—then do whatever it takes to test it, even if it's absurd.",
      },
    ],
  },
  {
    id: 'slack-pivot',
    title: "Stewart Butterfield Was Building a Video Game",
    company: 'Slack',
    color: '#4A154B',
    tags: ['Pivot', 'B2B SaaS', 'Product-Market Fit'],
    addedDate: '2024-01-22',
    slides: [
      {
        type: 'hook',
        headline: "Stewart Butterfield Was Building a Video Game",
        body: "In 2012, Tiny Speck was making Glitch—a whimsical multiplayer game about creatures living inside giant gods. It was going nowhere. But buried inside their dev workflow was something accidental: an internal chat tool that felt weirdly good to use.",
        stat: '2012',
        statLabel: 'Glitch shuts down',
      },
      {
        type: 'context',
        headline: "This Was His Second Failed Game",
        body: "Butterfield had already co-founded Flickr from the wreckage of a failed game called Game Neverending. He recognized the pattern: sometimes the side project is the real product. Glitch had built incredible internal communication tooling. The game was dying. The glue holding the team together was not.",
      },
      {
        type: 'move',
        headline: "Pivot to the Internal Tool",
        body: "Butterfield shut Glitch down, returned money to investors, and pivoted to commercializing the chat tool. The genius: he launched Slack with a friendly, non-threatening name and consumer-grade UX in an enterprise context. At the exact moment millennials were entering the workforce and demanding better tools.",
      },
      {
        type: 'outcome',
        headline: "$27.7B Acquisition in 8 Years",
        body: "Slack reached $7M ARR in its first year. It became the fastest SaaS product to reach a $1B valuation. Salesforce acquired it for $27.7B. The key: making enterprise software feel human, at the moment the market was ready for exactly that.",
        stat: '$27.7B',
        statLabel: 'Salesforce acquisition price',
      },
      {
        type: 'insight',
        headline: "The Side Effect Is Sometimes the Product",
        body: "Glitch's real product was the internal communication layer built to make game development possible. Butterfield had seen this movie before with Flickr. The pattern: when your internal tooling is better than what's commercially available, you've accidentally built a product. The question is whether you notice.",
      },
    ],
  },
  {
    id: 'tiktok-algorithm',
    title: "Every Other Social Network Got It Backwards",
    company: 'TikTok',
    color: '#00F2EA',
    tags: ['Algorithm', 'Engagement', 'Distribution', 'Platform'],
    addedDate: '2024-02-01',
    slides: [
      {
        type: 'hook',
        headline: "Every Other Social Network Got It Backwards",
        body: "Facebook, Twitter, Instagram—they all started with social graphs. Add friends, follow people, build your network. Content quality was secondary. TikTok launched with the opposite assumption: great content first, social graph optional. This single architectural decision changed everything.",
        stat: '1B',
        statLabel: 'users in under 5 years',
      },
      {
        type: 'context',
        headline: "The Cold Start Problem, Solved",
        body: "Every social network has a cold start problem. A new user with zero followers sees zero content. The fix was always 'import your contacts' or 'follow these starter accounts.' TikTok asked: what if the algorithm showed great content to you from day one, regardless of who you follow? No network required.",
      },
      {
        type: 'move',
        headline: "The For You Page as Product Philosophy",
        body: "TikTok's For You Page isn't just a feature—it's the entire product philosophy. The algorithm watches what you watch, rewatch, skip, share, and comment on. It figures out your interests faster than you can articulate them. Most users get a personalized feed within 20 minutes. Twitter still shows you trending topics from places you've never been.",
      },
      {
        type: 'outcome',
        headline: "The Creator Economy Unlocked",
        body: "On Instagram or YouTube, going viral requires followers. On TikTok, a brand new account can get 10M views if the content is strong. This changed the power dynamic: creators became more loyal to TikTok than any other platform because TikTok gave them reach they couldn't get anywhere else.",
        stat: '0',
        statLabel: 'followers needed to go viral',
      },
      {
        type: 'insight',
        headline: "Social Graphs Are Infrastructure, Not Value",
        body: "The value of social media was always the content and connection—not the graph itself. TikTok stripped away the friction of building a network and delivered value immediately. In a world of abundant content, curation is the product. Every major social platform now has an algorithmic feed because of TikTok.",
      },
    ],
  },
  {
    id: 'amazon-aws',
    title: "Amazon Didn't Plan to Build AWS",
    company: 'Amazon',
    color: '#FF9900',
    tags: ['Platform', 'Infrastructure', 'B2B SaaS'],
    addedDate: '2024-02-10',
    slides: [
      {
        type: 'hook',
        headline: "Amazon Didn't Plan to Build AWS",
        body: "In 2002, Amazon was struggling to ship features fast enough. Every team needed to talk to every other team to access data and services. The system was a mess. Jeff Bezos sent a terse memo that would accidentally create the most profitable business in Amazon's history.",
        stat: '$90B+',
        statLabel: 'AWS annual revenue today',
      },
      {
        type: 'context',
        headline: "The API Mandate Memo",
        body: "Bezos's memo had one rule: all teams must expose their data and functionality through APIs. No exceptions. Teams couldn't talk to each other any other way. Anyone who doesn't comply will be fired. The goal was internal efficiency. The side effect was world-class, well-documented, modular infrastructure.",
      },
      {
        type: 'move',
        headline: "Selling the Excess Capacity",
        body: "By 2003, Amazon had built such robust internal infrastructure that they had spare capacity. Andy Jassy noticed startups were struggling with the exact same problems Amazon had already solved. What if Amazon sold infrastructure as a service? AWS launched in 2006 with S3 and EC2. No other retailer saw the opportunity.",
      },
      {
        type: 'outcome',
        headline: "AWS Subsidizes Everything Else",
        body: "AWS is consistently 60–70% of Amazon's total operating profit, even though it's a fraction of total revenue. The retail business runs on razor-thin margins. AWS prints money. It also creates a strategic weapon: every startup competing with Amazon retail is likely paying Amazon for the cloud.",
        stat: '60–70%',
        statLabel: "of Amazon's operating profit",
      },
      {
        type: 'insight',
        headline: "Internal Excellence Becomes External Product",
        body: "Amazon solved its own problem so well that the solution became a product. This pattern repeats: Google's internal tools → Google Cloud; LinkedIn's data pipeline → Apache Kafka; Facebook's PHP infra → the Hack language. If your company solves a hard infrastructure problem at scale, ask who else has the same problem.",
      },
    ],
  },
  {
    id: 'dollar-shave-club',
    title: "They Spent $4,500 and Got 12,000 Orders in 48 Hours",
    company: 'Dollar Shave Club',
    color: '#E63946',
    tags: ['Marketing', 'DTC', 'Brand', 'Viral'],
    addedDate: '2024-02-20',
    slides: [
      {
        type: 'hook',
        headline: "They Spent $4,500 and Got 12,000 Orders in 48 Hours",
        body: "March 6, 2012. Dollar Shave Club uploaded a YouTube video. The CEO walks through a warehouse talking about razors. Profanity. A toddler shaving a man's head. A bear costume. In 48 hours, 12,000 people signed up. The video cost $4,500 to make.",
        stat: '$4,500',
        statLabel: 'video budget → $1B acquisition',
      },
      {
        type: 'context',
        headline: "Gillette Had 70% Market Share",
        body: "The razor market was dominated by Gillette and its 4-blade, 5-blade, vibrating, heated razors that cost $25 a pack. Gillette spent hundreds of millions on marketing. Dollar Shave Club founder Michael Dubin had a crazy idea: men don't need all that. They just need a decent blade, cheap, delivered to their door.",
      },
      {
        type: 'move',
        headline: "The Video Did What a Sales Team Couldn't",
        body: "Dubin was a trained improv comedian. Instead of SEM or brand agencies, he wrote a 90-second script that was honest, funny, and clear. '$1 a month. No commitments. Are the blades good? Our blades are f***ing great.' He made the product the joke AND the product. The video converted better than any paid ad.",
      },
      {
        type: 'outcome',
        headline: "Unilever Paid $1B Cash",
        body: "Dollar Shave Club had $153M revenue at acquisition. Unilever paid $1B—6.5× revenue for a razor subscription. What they actually bought: the direct customer relationship (no retailer markup), the brand voice, and proof that DTC disruption was real. The $4,500 video had a $1B ROI.",
        stat: '$1B',
        statLabel: 'Unilever acquisition on $153M revenue',
      },
      {
        type: 'insight',
        headline: "Authenticity Is a Distribution Strategy",
        body: "DSC didn't outspend Gillette. They out-voiced them. The video worked because it said what every man was already thinking: these razors are overpriced and over-engineered. Brand voice as competitive moat. In a world of paid distribution, authenticity that generates organic sharing is a structural advantage. The marketing WAS the product differentiation.",
      },
    ],
  },
  {
    id: 'figma-multiplayer',
    title: "Dylan Field Bet That the Future of Design Was in the Browser",
    company: 'Figma',
    color: '#F24E1E',
    tags: ['Product-Led Growth', 'Collaboration', 'B2B SaaS'],
    addedDate: '2024-03-01',
    slides: [
      {
        type: 'hook',
        headline: "Dylan Field Bet That the Future of Design Was in the Browser",
        body: "In 2012, Field dropped out of Brown on a Thiel Fellowship and spent four years building Figma before anyone could use it. He was betting that browser-based + real-time collaboration would beat native apps. In 2013, both bets seemed borderline delusional.",
        stat: '4 years',
        statLabel: 'before shipping anything',
      },
      {
        type: 'context',
        headline: "Sketch Was Eating Adobe's Lunch",
        body: "By 2015, every designer was switching from Photoshop to Sketch. Sketch was native Mac, fast, built for UI design. But it had one fatal flaw: it was local. Designers would finish mockups and export a PDF or take a screenshot to share. Handoffs were painful. Collaboration was manual.",
      },
      {
        type: 'move',
        headline: "Design as a Multiplayer Sport",
        body: "Figma's insight: design is fundamentally collaborative, but all the tools were single-player. By building browser-based with WebGL rendering, Figma made design multiplayer—like Google Docs did for writing. Share a link, and product managers, engineers, and executives could be in the file simultaneously. No exports. No version hell.",
      },
      {
        type: 'outcome',
        headline: "$800M ARR Before the Adobe Deal",
        body: "Figma grew through product-led growth: a free tier, viral link sharing (every shared link is marketing), and bottom-up enterprise adoption—teams adopted it without IT approval, then the company paid. Adobe tried to acquire Figma for $20B in 2022, which retroactively validated how serious a threat Figma was.",
        stat: '$800M',
        statLabel: 'ARR before the Adobe acquisition attempt',
      },
      {
        type: 'insight',
        headline: "Collaboration Is the Distribution Mechanism",
        body: "Every time a Figma link was shared with a non-designer—a PM, an engineer, a stakeholder—Figma got a new potential user. The collaborative feature was simultaneously the product advantage AND the growth channel. This is product-led growth at its most elegant: the thing that makes the product better is also what spreads it.",
      },
    ],
  },
]

export const allTags = Array.from(
  new Set(stories.flatMap(s => s.tags))
).sort()
