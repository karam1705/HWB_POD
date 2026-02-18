// ── Dashboard Data & Charts ──
// Data sourced from official UAE directories and verified websites.

// ── Location Filter State ──
let activeCity = 'All';

const CITIES = ['All', 'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'RAK'];

const SCHOOLS = [
    { name: 'Dubai Centre for Special Needs (DCSN)', city: 'Dubai', location: '45th St, Near Safa Park, Dubai', type: 'Autism & Down Syndrome', ages: '3–21', phone: '+971 4 344 0966', mapsUrl: 'https://maps.google.com/?q=Dubai+Centre+for+Special+Needs+Safa+Park+Dubai', tags: ['Academic', 'Multi-Sensory', 'Prevocational'], icon: '🏫', color: '#EEE9FF' },
    { name: 'Al Noor Training Centre', city: 'Dubai', location: 'Al Barsha 1, Dubai', type: 'Special Needs', ages: '4–18', phone: '+971 4 340 4844', mapsUrl: 'https://maps.google.com/?q=Al+Noor+Training+Centre+Al+Barsha+Dubai', tags: ['Life Skills', 'Vocational', 'Therapy'], icon: '🌟', color: '#E0F7F4' },
    { name: 'SEED Special Education Center', city: 'Dubai', location: 'Al Garhoud, Dubai', type: 'Autism & Down Syndrome', ages: '2–18', phone: '+971 4 386 9360', mapsUrl: 'https://maps.google.com/?q=SEED+Special+Education+Center+Al+Garhoud+Dubai', tags: ['ABA', 'Speech Therapy', 'OT'], icon: '🌱', color: '#FFF0EE' },
    { name: 'SNF Children Development Centre', city: 'Dubai', location: 'Al Mankhool, Dubai', type: 'Developmental Delays', ages: '1–12', phone: '+971 4 334 9818', mapsUrl: 'https://maps.google.com/?q=SNF+Children+Development+Centre+Al+Mankhool+Dubai', tags: ['Early Intervention', 'Play Therapy', 'Sensory'], icon: '🌸', color: '#FFF8E7' },
    { name: 'Dubai Down Syndrome Centre (DDSC)', city: 'Dubai', location: 'Dubai', type: 'Down Syndrome Specialist', ages: '0–21', phone: '+971 4 261 3145', mapsUrl: 'https://maps.google.com/?q=Dubai+Down+Syndrome+Centre', tags: ['Down Syndrome', 'Therapy', 'Community'], icon: '💛', color: '#EEE9FF' },
    { name: 'Dubai Autism Center (DAC)', city: 'Dubai', location: 'Al Wasl, Dubai', type: 'Autism Specialist', ages: '2–18', phone: '+971 4 398 6862', mapsUrl: 'https://maps.google.com/?q=Dubai+Autism+Center+Al+Wasl', tags: ['ABA', 'Assessment', 'Speech Therapy'], icon: '💜', color: '#E0F7F4' },
    { name: 'Milestones Autism Rehabilitation Center', city: 'Dubai', location: 'Dubai', type: 'Autism Rehabilitation', ages: '2–16', phone: '+971 50 802 5115', mapsUrl: 'https://maps.google.com/?q=Milestones+Autism+Rehabilitation+Center+Dubai', tags: ['Rehabilitation', 'ABA', 'Social Skills'], icon: '🏅', color: '#FFF0EE' },
    { name: 'Emirates Autism Centre', city: 'Abu Dhabi', location: 'Al Falah Street, Abu Dhabi', type: 'Autism Specialist', ages: '2–18', phone: '+971 2 642 7557', mapsUrl: 'https://maps.google.com/?q=Emirates+Autism+Centre+Al+Falah+Abu+Dhabi', tags: ['Assessment', 'Early Intervention', 'Speech Therapy'], icon: '⭐', color: '#FFF8E7' },
    { name: 'Mohammed Bin Rashid Centre (MRC-NECC)', city: 'Abu Dhabi', location: 'Mohamed Bin Zayed City, Abu Dhabi', type: 'Autism Specialist', ages: '3–18', phone: '+971 2 691 8888', mapsUrl: 'https://maps.google.com/?q=Mohammed+Bin+Rashid+Centre+MRC+NECC+Abu+Dhabi', tags: ['ABA', 'Education', 'Therapy'], icon: '🌈', color: '#EEE9FF' },
    { name: 'Abilities Development Centre', city: 'Abu Dhabi', location: 'Mohamed Bin Zayed City, Abu Dhabi', type: 'People of Determination', ages: '3–21', phone: '+971 2 491 3230', mapsUrl: 'https://maps.google.com/?q=Abilities+Development+Centre+Mohamed+Bin+Zayed+City+Abu+Dhabi', tags: ['Rehabilitation', 'Life Skills', 'Inclusion'], icon: '🌻', color: '#E0F7F4' },
    { name: 'Abu Dhabi Autism Center', city: 'Abu Dhabi', location: 'Abu Dhabi', type: 'Autism Specialist', ages: '2–18', phone: '+971 2 305 6400', mapsUrl: 'https://maps.google.com/?q=Abu+Dhabi+Autism+Center', tags: ['Therapy', 'Assessment', 'Support'], icon: '💙', color: '#FFF0EE' },
    { name: 'Sharifa Yateem Centre for Rehabilitation', city: 'Sharjah', location: 'Sharjah', type: 'Autism & Special Needs', ages: '3–18', phone: '+971 6 572 3535', mapsUrl: 'https://maps.google.com/?q=Sharifa+Yateem+Centre+Rehabilitation+Sharjah', tags: ['Rehabilitation', 'Speech', 'OT'], icon: '🌅', color: '#FFF8E7' },
];

const HOSPITALS = [
    { name: 'Dubai Autism Center (DAC)', city: 'Dubai', location: 'Al Wasl Road, Dubai', services: ['Autism Assessment', 'ABA Therapy', 'Speech Therapy'], phone: '+971 4 398 6862', mapsUrl: 'https://maps.google.com/?q=Dubai+Autism+Center+Al+Wasl+Road', rating: 5, icon: '💜', color: '#EEE9FF' },
    { name: 'SEED Special Education Center', city: 'Dubai', location: 'Al Garhoud, Dubai', services: ['ABA Therapy', 'OT', 'Behavioral Support'], phone: '+971 52 246 6441', mapsUrl: 'https://maps.google.com/?q=SEED+Special+Education+Center+Al+Garhoud+Dubai', rating: 5, icon: '🌱', color: '#E0F7F4' },
    { name: 'Priory Wellbeing Centre', city: 'Dubai', location: 'Dubai Healthcare City', services: ['Child Psychiatry', 'Family Therapy', 'Behavioral Support'], phone: '+971 4 240 4300', mapsUrl: 'https://maps.google.com/?q=Priory+Wellbeing+Centre+Dubai+Healthcare+City', rating: 4, icon: '💙', color: '#FFF0EE' },
    { name: 'Medcare Women & Children Hospital', city: 'Dubai', location: 'Al Safa, Dubai', services: ['Developmental Pediatrics', 'Sensory Integration', 'OT'], phone: '+971 4 407 9100', mapsUrl: 'https://maps.google.com/?q=Medcare+Women+Children+Hospital+Al+Safa+Dubai', rating: 4, icon: '👶', color: '#FFF8E7' },
    { name: 'Camali Clinic', city: 'Dubai', location: 'Dubai', services: ['Child Psychology', 'Autism Assessment', 'Family Counseling'], phone: '+971 4 526 3606', mapsUrl: 'https://maps.google.com/?q=Camali+Clinic+Dubai', rating: 4, icon: '🧠', color: '#EEE9FF' },
    { name: 'Dr. Rami Hamed Medical Center', city: 'Dubai', location: 'Dubai Healthcare City', services: ['Pediatric Neurology', 'Developmental Assessment', 'Therapy'], phone: '+971 4 279 8200', mapsUrl: 'https://maps.google.com/?q=Dr+Rami+Hamed+Medical+Center+Dubai+Healthcare+City', rating: 4, icon: '🩺', color: '#E0F7F4' },
    { name: 'Abu Dhabi Autism Center (ZHO)', city: 'Abu Dhabi', location: 'Shakhbout City, Abu Dhabi', services: ['Autism Therapy', 'Rehabilitation', 'Life Skills'], phone: '+971 2 305 6400', mapsUrl: 'https://maps.google.com/?q=Abu+Dhabi+Autism+Center+Shakhbout+City', rating: 5, icon: '🌟', color: '#FFF0EE' },
    { name: 'Emirates Autism Centre', city: 'Abu Dhabi', location: 'Al Falah Street, Abu Dhabi', services: ['Assessment', 'Early Intervention', 'Speech Therapy', 'OT'], phone: '+971 2 642 7557', mapsUrl: 'https://maps.google.com/?q=Emirates+Autism+Centre+Al+Falah+Abu+Dhabi', rating: 5, icon: '⭐', color: '#FFF8E7' },
    { name: 'AlAwj Autism Center', city: 'Abu Dhabi', location: 'Abu Dhabi', services: ['ABA Therapy', 'Speech Therapy', 'Social Skills'], phone: '+971 50 176 5643', mapsUrl: 'https://maps.google.com/?q=AlAwj+Autism+Center+Abu+Dhabi', rating: 4, icon: '🌈', color: '#EEE9FF' },
    { name: 'HIA Autism Center', city: 'Abu Dhabi', location: 'Abu Dhabi', services: ['Behavioral Therapy', 'Parent Training', 'Assessment'], phone: '+971 58 993 8795', mapsUrl: 'https://maps.google.com/?q=HIA+Autism+Center+Abu+Dhabi', rating: 4, icon: '❤️', color: '#E0F7F4' },
];

const PLAY_AREAS = [
    { name: 'KidZania Dubai', city: 'Dubai', location: 'Dubai Mall, Dubai', features: ['Sensory-friendly hours', 'Quiet zones', 'Adapted activities'], mapsUrl: 'https://maps.google.com/?q=KidZania+Dubai+Mall', icon: '🎪', color: '#EEE9FF' },
    { name: 'Aventura Parks', city: 'Dubai', location: 'Umm Suqeim, Dubai', features: ['Outdoor sensory trails', 'Nature play', 'Calm areas'], mapsUrl: 'https://maps.google.com/?q=Aventura+Parks+Umm+Suqeim+Dubai', icon: '🌳', color: '#E0F7F4' },
    { name: 'Al Mamzar Beach Park', city: 'Dubai', location: 'Al Mamzar, Dubai', features: ['Open spaces', 'Water play', 'Quiet picnic areas'], mapsUrl: 'https://maps.google.com/?q=Al+Mamzar+Beach+Park+Dubai', icon: '🏖️', color: '#FFF0EE' },
    { name: 'Zabeel Park', city: 'Dubai', location: 'Zabeel, Dubai', features: ['Wide open spaces', 'Splash pad', 'Shaded areas'], mapsUrl: 'https://maps.google.com/?q=Zabeel+Park+Dubai', icon: '🌿', color: '#FFF8E7' },
    { name: 'Mattel Play! Town', city: 'Dubai', location: 'Dubai Parks & Resorts', features: ['Structured play', 'Low-stimulation zones', 'Inclusive rides'], mapsUrl: 'https://maps.google.com/?q=Mattel+Play+Town+Dubai+Parks+Resorts', icon: '🎡', color: '#EEE9FF' },
    { name: 'Al Ain Zoo (Sensory Visits)', city: 'Abu Dhabi', location: 'Al Ain, Abu Dhabi', features: ['Calm animal encounters', 'Open spaces', 'Structured tours'], mapsUrl: 'https://maps.google.com/?q=Al+Ain+Zoo+Abu+Dhabi', icon: '🦁', color: '#E0F7F4' },
    { name: 'Corniche Beach Park', city: 'Abu Dhabi', location: 'Corniche, Abu Dhabi', features: ['Sensory-friendly', 'Open beach', 'Quiet zones'], mapsUrl: 'https://maps.google.com/?q=Corniche+Beach+Park+Abu+Dhabi', icon: '🌊', color: '#FFF0EE' },
    { name: 'Al Montazah Parks', city: 'Sharjah', location: 'Sharjah', features: ['Water park', 'Amusement rides', 'Calm zones'], mapsUrl: 'https://maps.google.com/?q=Al+Montazah+Parks+Sharjah', icon: '🎠', color: '#FFF8E7' },
];

const ACTIVITIES = [
    { emoji: '🎨', title: 'Finger Painting', category: 'Creative Arts', age: '2+', materials: 'Non-toxic paint, paper, apron', benefits: 'Sensory exploration, fine motor skills, creativity', steps: ['Lay down newspaper or a mat', 'Pour small amounts of paint on a plate', 'Let your child dip fingers and explore freely', 'Name colors as they use them', 'Display the artwork proudly!'], color: '#FFF0EE' },
    { emoji: '🧩', title: 'Shape Sorting', category: 'Cognitive', age: '2+', materials: 'Shape sorter toy or cut cardboard shapes', benefits: 'Problem solving, hand-eye coordination, shape recognition', steps: ['Show your child each shape and name it', 'Demonstrate fitting one shape into the hole', 'Guide their hand if needed', 'Celebrate each success with praise', 'Gradually reduce help as they improve'], color: '#EEE9FF' },
    { emoji: '🌊', title: 'Water Sensory Bin', category: 'Sensory Play', age: '1+', materials: 'Plastic bin, water, cups, toys', benefits: 'Sensory regulation, calming, cause-and-effect learning', steps: ['Fill a bin with a few inches of warm water', 'Add cups, spoons, and floating toys', 'Let your child pour, splash, and explore', 'Add food coloring for visual interest', 'Supervise closely at all times'], color: '#E0F7F4' },
    { emoji: '🎵', title: 'Rhythm & Music', category: 'Movement', age: '1+', materials: 'Drums, pots, wooden spoons, or shakers', benefits: 'Communication, motor skills, emotional expression', steps: ['Play a simple beat and invite your child to copy', 'Shake a rattle together to music', 'Clap hands to a rhythm', 'Try freeze dance — stop when music stops', 'Sing familiar songs with actions'], color: '#FFF8E7' },
    { emoji: '🧘', title: 'Kids Yoga', category: 'Movement', age: '3+', materials: 'Yoga mat or soft floor space', benefits: 'Body awareness, calming, flexibility, focus', steps: ['Start with deep breathing together', 'Try "tree pose" — stand on one foot', 'Do "cat-cow" on hands and knees', 'Try "child\'s pose" for relaxation', 'End with 2 minutes of quiet lying down'], color: '#EEE9FF' },
    { emoji: '🌱', title: 'Planting Seeds', category: 'Nature', age: '3+', materials: 'Small pots, soil, seeds, water', benefits: 'Responsibility, patience, sensory exploration, science', steps: ['Fill a pot with soil together', 'Make a small hole with a finger', 'Drop in 2–3 seeds', 'Cover gently and water lightly', 'Place in sunlight and check daily'], color: '#E0F7F4' },
    { emoji: '🏗️', title: 'Block Building', category: 'Cognitive', age: '1+', materials: 'Wooden or foam blocks', benefits: 'Spatial reasoning, creativity, cause-and-effect', steps: ['Start by stacking 2–3 blocks together', 'Knock them down and laugh together', 'Try building a tower as tall as possible', 'Create simple structures (house, bridge)', 'Describe what you\'re building as you go'], color: '#FFF0EE' },
    { emoji: '🎭', title: 'Pretend Play', category: 'Social', age: '2+', materials: 'Dress-up clothes, toy kitchen, dolls', benefits: 'Social skills, language development, imagination', steps: ['Set up a simple scenario (shop, kitchen, doctor)', 'Take on roles together', 'Use simple, clear language', 'Follow your child\'s lead', 'Narrate actions to build vocabulary'], color: '#FFF8E7' },
    { emoji: '🖍️', title: 'Tracing & Drawing', category: 'Fine Motor', age: '2+', materials: 'Crayons, thick pencils, tracing sheets', benefits: 'Pre-writing skills, hand strength, focus', steps: ['Start with thick crayons for easy grip', 'Trace simple shapes: circle, square, line', 'Progress to letters and numbers', 'Use dotted lines to guide tracing', 'Praise effort, not perfection'], color: '#EEE9FF' },
    { emoji: '🧁', title: 'Simple Baking', category: 'Life Skills', age: '4+', materials: 'Simple recipe, mixing bowl, spoon', benefits: 'Following instructions, fine motor, sensory, independence', steps: ['Choose a simple recipe (muffins, cookies)', 'Let your child pour and mix ingredients', 'Name each ingredient as you add it', 'Wait together while it bakes', 'Decorate and enjoy together!'], color: '#FFF0EE' },
    { emoji: '🎯', title: 'Bean Bag Toss', category: 'Movement', age: '3+', materials: 'Bean bags or socks, targets or buckets', benefits: 'Gross motor skills, focus, turn-taking, coordination', steps: ['Set up targets at different distances', 'Demonstrate tossing a bean bag', 'Take turns throwing', 'Count how many land in the target', 'Move targets closer or further to adjust difficulty'], color: '#E0F7F4' },
    { emoji: '📚', title: 'Story Time with Props', category: 'Language', age: '2+', materials: 'Picture books, puppets, or toys', benefits: 'Language development, imagination, bonding, attention', steps: ['Choose a short, colorful picture book', 'Use puppets or toys to act out the story', 'Point to pictures and name them', 'Ask simple questions: "Where is the dog?"', 'Read the same book repeatedly — repetition builds language'], color: '#FFF8E7' },
];

const GUIDES = [
    {
        icon: '🍽️', title: 'Feeding Guide',
        tips: [
            { icon: '🥦', title: 'Texture Preferences', text: 'Many children with autism or Down syndrome have strong texture preferences. Offer foods in textures they accept and gradually introduce new ones through "food chaining" — moving from accepted to similar textures.' },
            { icon: '🕐', title: 'Consistent Mealtimes', text: 'Eat at the same time every day. Use a visual schedule showing breakfast, lunch, and dinner. Predictability reduces anxiety around eating.' },
            { icon: '🍽️', title: 'Divided Plates', text: 'Use divided plates to keep foods separate. Many children are distressed when foods touch. This simple change can dramatically reduce mealtime stress.' },
            { icon: '🚫', title: 'Avoid Pressure', text: 'Never force eating. Pressure increases food aversion. Offer new foods alongside accepted ones without expectation. Celebrate any interaction with new food.' },
            { icon: '👨‍👩‍👧', title: 'Eat Together', text: 'Family mealtimes model eating behavior. Sit together, eat the same foods, and make it a positive social experience.' },
            { icon: '💧', title: 'Hydration', text: 'Ensure your child drinks enough water throughout the day. Some children prefer specific cups or straws. Offer water consistently with every meal and snack.' }
        ]
    },
    {
        icon: '🛁', title: 'Bathing & Hygiene',
        tips: [
            { icon: '📋', title: 'Visual Schedule', text: 'Create a picture schedule showing each bath step: undress → get in → wash hair → wash body → rinse → dry → dress. Review it together before starting.' },
            { icon: '🌡️', title: 'Consistent Temperature', text: 'Test water temperature every time and keep it consistent. Many children are hypersensitive to temperature changes. Use a bath thermometer.' },
            { icon: '🧴', title: 'Sensory-Friendly Products', text: 'Use fragrance-free, gentle shampoo and soap. Strong scents can be overwhelming. Let your child smell products before use.' },
            { icon: '🚿', title: 'Handheld Showerhead', text: 'A handheld showerhead gives your child more control over water direction. This reduces the surprise of water hitting their face or head.' },
            { icon: '🧸', title: 'Comfort Item', text: 'Allow your child to hold a waterproof toy or comfort item during bathing. This provides security during a potentially stressful routine.' },
            { icon: '🦷', title: 'Teeth Brushing', text: 'Use a soft-bristle toothbrush and flavored (but fluoride) toothpaste. Try an electric toothbrush — the vibration can actually be calming for some children. Make it a game.' }
        ]
    },
    {
        icon: '😴', title: 'Sleep Routines',
        tips: [
            { icon: '🕗', title: 'Fixed Bedtime', text: 'Set a consistent bedtime — the same time every night, including weekends. The body clock thrives on routine. Aim for 9–10 hours of sleep for school-age children.' },
            { icon: '📱', title: 'No Screens Before Bed', text: 'Turn off all screens (TV, tablet, phone) at least 1 hour before bedtime. Blue light suppresses melatonin and delays sleep onset.' },
            { icon: '🛏️', title: 'Weighted Blanket', text: 'A weighted blanket (approximately 10% of body weight) provides deep pressure that promotes relaxation and helps children fall asleep faster.' },
            { icon: '🌙', title: 'Wind-Down Routine', text: 'Create a 30-minute wind-down: bath → pajamas → quiet story → lights dim → sleep. The same sequence every night signals the brain that sleep is coming.' },
            { icon: '🔇', title: 'Sleep Environment', text: 'Keep the bedroom cool (18–20°C), dark, and quiet. White noise machines can mask disruptive sounds. Use blackout curtains if needed.' },
            { icon: '🌟', title: 'Melatonin (Consult Doctor)', text: 'Many children with autism have disrupted melatonin production. Speak to your pediatrician about low-dose melatonin supplements if sleep difficulties persist.' }
        ]
    },
    {
        icon: '🗣️', title: 'Communication',
        tips: [
            { icon: '🖼️', title: 'Visual Supports', text: 'Use picture cards, visual schedules, and symbol boards. Many children with autism and Down syndrome are visual learners. PECS (Picture Exchange Communication System) is highly effective.' },
            { icon: '🤟', title: 'Basic Sign Language', text: 'Learn 20–30 basic signs (eat, drink, more, help, stop, yes, no). Signing bridges the gap while verbal communication develops.' },
            { icon: '📱', title: 'AAC Apps', text: 'Augmentative and Alternative Communication (AAC) apps like Proloquo2Go, TouchChat, or LetMeTalk give non-verbal children a voice.' },
            { icon: '⏳', title: 'Wait for Response', text: 'After asking a question or making a request, wait 10–15 seconds for a response. Children with communication differences need more processing time.' },
            { icon: '✅', title: 'Respond to All Communication', text: 'Respond to every communication attempt — verbal, gestural, or behavioral. This teaches your child that communication works and is worth trying.' },
            { icon: '🎵', title: 'Sing to Communicate', text: 'Songs and rhymes can unlock speech in children who struggle with conversation. Try singing instructions: "Time to wash our hands, wash our hands..."' }
        ]
    },
    {
        icon: '💙', title: 'Behavior & Meltdowns',
        tips: [
            { icon: '🔍', title: 'Identify Triggers', text: 'Keep a behavior diary to identify patterns. Common triggers: sensory overload, hunger, fatigue, transitions, unexpected changes. Prevention is more effective than reaction.' },
            { icon: '😌', title: 'Stay Calm', text: 'Your emotional state directly affects your child. Take a deep breath before responding. A calm parent helps regulate a dysregulated child.' },
            { icon: '🏠', title: 'Safe Space', text: 'Create a designated calm-down space with soft lighting, comfortable textures, and minimal stimulation. Teach your child to use it proactively.' },
            { icon: '🚫', title: 'Don\'t Reason During Meltdown', text: 'During a meltdown, the rational brain is offline. Wait until your child is calm before discussing what happened. Reasoning during a meltdown escalates it.' },
            { icon: '⭐', title: 'Positive Reinforcement', text: 'Catch your child being good! Praise specific behaviors immediately: "I love how you waited so patiently!" Positive reinforcement is far more effective than punishment.' },
            { icon: '📊', title: 'ABC Chart', text: 'Use an Antecedent-Behavior-Consequence (ABC) chart to track what happens before and after behaviors. This helps identify patterns and develop prevention strategies.' }
        ]
    },
    {
        icon: '📅', title: 'Daily Routines',
        tips: [
            { icon: '🗓️', title: 'Visual Timetable', text: 'Create a visual daily schedule with pictures for each activity: wake up → breakfast → school → lunch → activity → bath → dinner → bed. Review it each morning together.' },
            { icon: '⏰', title: 'Use Timers', text: 'Visual timers (like Time Timer) show how long until an activity ends. This reduces anxiety about transitions and helps children understand time.' },
            { icon: '🔄', title: 'Prepare for Transitions', text: 'Give 5-minute and 2-minute warnings before changing activities. "In 5 minutes we\'re going to stop playing and have lunch." Sudden transitions are very difficult.' },
            { icon: '🌅', title: 'Morning Routine', text: 'A consistent morning routine reduces stress for the whole family. Use a picture checklist: wake → toilet → wash face → get dressed → breakfast → brush teeth → school.' },
            { icon: '🌙', title: 'Evening Routine', text: 'A predictable evening routine signals the end of the day: dinner → play → bath → story → sleep. Consistency is the key to cooperation.' }
        ]
    },
    {
        icon: '🧠', title: 'Sensory Processing',
        tips: [
            { icon: '👁️', title: 'Visual Sensitivity', text: 'Dim bright lights, avoid fluorescent bulbs, and use warm-toned lighting. Sunglasses outdoors can help. Reduce visual clutter in your child\'s environment.' },
            { icon: '👂', title: 'Sound Sensitivity', text: 'Use noise-cancelling headphones in loud environments. Give advance warning before loud sounds (blender, vacuum). Create quiet zones at home.' },
            { icon: '🤲', title: 'Touch Sensitivity', text: 'Remove clothing tags, choose seamless socks, and use soft fabrics. Let your child choose their own clothing when possible. Avoid surprise touches — always approach from the front.' },
            { icon: '🍽️', title: 'Taste & Smell Sensitivity', text: 'Be mindful of strong food smells during cooking. Use unscented cleaning products. Introduce new smells gradually and positively.' },
            { icon: '🏃', title: 'Proprioceptive Input', text: 'Heavy work activities (carrying groceries, pushing a cart, jumping) provide calming proprioceptive input. Build these into the daily routine.' },
            { icon: '🌀', title: 'Vestibular Input', text: 'Swinging, rocking, and spinning provide vestibular input that many children crave. A garden swing or rocking chair can be a great daily tool.' }
        ]
    },
    {
        icon: '❤️', title: 'Parent Self-Care',
        tips: [
            { icon: '🧘', title: 'Your Wellbeing Matters', text: 'You cannot pour from an empty cup. Prioritizing your own mental and physical health directly benefits your child. This is not selfish — it is essential.' },
            { icon: '👥', title: 'Join a Support Group', text: 'Connect with other parents of children with autism or Down syndrome. Sharing experiences reduces isolation and provides practical advice. Search for UAE-based parent groups online.' },
            { icon: '😴', title: 'Prioritize Sleep', text: 'Sleep deprivation affects your ability to parent effectively. If your child\'s sleep is disrupted, seek help from a sleep specialist or your pediatrician.' },
            { icon: '🗣️', title: 'Seek Counseling', text: 'Parenting a child with special needs can be emotionally demanding. A therapist or counselor can provide a safe space to process your feelings without judgment.' },
            { icon: '🎯', title: 'Set Realistic Expectations', text: 'Progress is not linear. Celebrate small wins. Some days will be hard — that is normal. Focus on the journey, not a fixed destination.' },
            { icon: '💪', title: 'Advocate for Your Child', text: 'You are your child\'s best advocate. Learn your child\'s rights, attend IEP meetings, and don\'t be afraid to ask questions or push for better services.' }
        ]
    }
];

// ── Location Filter UI ──
function renderCityFilter(containerId, dataKey) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const cities = ['All', ...new Set(
        (dataKey === 'schools' ? SCHOOLS : dataKey === 'hospitals' ? HOSPITALS : PLAY_AREAS).map(i => i.city)
    )];
    container.innerHTML = cities.map(c => `
    <button class="city-btn ${c === activeCity ? 'active' : ''}" onclick="filterCity('${c}','${dataKey}')">${c}</button>
  `).join('');
}

function filterCity(city, dataKey) {
    activeCity = city;
    if (dataKey === 'schools') { renderCityFilter('schools-filter', 'schools'); renderSchools(); }
    if (dataKey === 'hospitals') { renderCityFilter('hospitals-filter', 'hospitals'); renderHospitals(); }
    if (dataKey === 'playareas') { renderCityFilter('playareas-filter', 'playareas'); renderPlayAreas(); }
}

function filterData(arr) {
    if (activeCity === 'All') return arr;
    return arr.filter(i => i.city === activeCity);
}

// ── Render Functions ──
function renderStars(n) {
    return '★'.repeat(n) + '☆'.repeat(5 - n);
}

function renderSchools() {
    const grid = document.getElementById('schools-grid');
    if (!grid) return;
    renderCityFilter('schools-filter', 'schools');
    const data = filterData(SCHOOLS);
    grid.innerHTML = data.length === 0
        ? '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px;">No schools found for this city.</p>'
        : data.map(s => `
    <div class="dir-card">
      <div class="dir-card-header" style="background:${s.color};">
        <div class="dir-card-icon" style="background:#fff;">${s.icon}</div>
        <div><h4>${s.name}</h4><div class="text-muted" style="font-size:0.8rem;">📍 ${s.location}</div></div>
      </div>
      <div class="dir-card-body">
        <div class="meta">${s.tags.map(t => `<span class="badge badge-lavender">${t}</span>`).join('')}</div>
        <p style="font-size:0.85rem;">Ages: <strong>${s.ages}</strong> · ${s.type}</p>
      </div>
      <div class="dir-card-footer">
        <span style="font-size:0.85rem;color:#6B6880;">📞 ${s.phone}</span>
        <div style="display:flex;gap:6px;">
          <a href="${s.mapsUrl}" target="_blank" class="btn btn-teal btn-sm">📍 Map</a>
          <a href="tel:${s.phone}" class="btn btn-ghost btn-sm">Call</a>
        </div>
      </div>
    </div>`).join('');
}

function renderHospitals() {
    const grid = document.getElementById('hospitals-grid');
    if (!grid) return;
    renderCityFilter('hospitals-filter', 'hospitals');
    const data = filterData(HOSPITALS);
    grid.innerHTML = data.length === 0
        ? '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px;">No centers found for this city.</p>'
        : data.map(h => `
    <div class="dir-card">
      <div class="dir-card-header" style="background:${h.color};">
        <div class="dir-card-icon" style="background:#fff;">${h.icon}</div>
        <div><h4>${h.name}</h4><div class="text-muted" style="font-size:0.8rem;">📍 ${h.location}</div></div>
      </div>
      <div class="dir-card-body">
        <div class="stars" style="margin-bottom:8px;">${renderStars(h.rating)}</div>
        <div class="meta">${h.services.map(s => `<span class="badge badge-teal">${s}</span>`).join('')}</div>
      </div>
      <div class="dir-card-footer">
        <span style="font-size:0.85rem;color:#6B6880;">📞 ${h.phone}</span>
        <div style="display:flex;gap:6px;">
          <a href="${h.mapsUrl}" target="_blank" class="btn btn-teal btn-sm">📍 Map</a>
          <a href="tel:${h.phone}" class="btn btn-ghost btn-sm">Call</a>
        </div>
      </div>
    </div>`).join('');
}

function renderPlayAreas() {
    const grid = document.getElementById('playareas-grid');
    if (!grid) return;
    renderCityFilter('playareas-filter', 'playareas');
    const data = filterData(PLAY_AREAS);
    grid.innerHTML = data.length === 0
        ? '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px;">No play areas found for this city.</p>'
        : data.map(p => `
    <div class="dir-card">
      <div class="dir-card-header" style="background:${p.color};justify-content:center;flex-direction:column;text-align:center;padding:24px;">
        <div style="font-size:2.5rem;margin-bottom:8px;">${p.icon}</div>
        <h4>${p.name}</h4>
        <div class="text-muted" style="font-size:0.8rem;">📍 ${p.location}</div>
      </div>
      <div class="dir-card-body">
        <div class="meta">${p.features.map(f => `<span class="badge badge-teal">${f}</span>`).join('')}</div>
      </div>
      <div class="dir-card-footer">
        <a href="${p.mapsUrl}" target="_blank" class="btn btn-teal btn-sm btn-block">📍 Open in Google Maps</a>
      </div>
    </div>`).join('');
}

function renderActivities() {
    const grid = document.getElementById('activities-grid');
    if (!grid) return;
    grid.innerHTML = ACTIVITIES.map((a, i) => `
    <div class="activity-card" onclick="toggleActivity(${i})">
      <div class="activity-card-top" style="background:${a.color};">${a.emoji}</div>
      <div class="activity-card-body">
        <span class="badge badge-lavender">${a.category}</span>
        <h4 style="margin:8px 0 4px;">${a.title}</h4>
        <p style="font-size:0.8rem;">Age: ${a.age} · ${a.materials}</p>
        <p style="font-size:0.8rem;margin-top:4px;color:#3DBDA7;font-weight:600;">✓ ${a.benefits}</p>
        <div class="activity-steps" id="steps-${i}">
          <ol>${a.steps.map(s => `<li>${s}</li>`).join('')}</ol>
        </div>
        <button class="btn btn-ghost btn-sm mt-16" style="width:100%;" id="steps-btn-${i}">▼ Show Steps</button>
      </div>
    </div>`).join('');
}

function toggleActivity(i) {
    const steps = document.getElementById('steps-' + i);
    const btn = document.getElementById('steps-btn-' + i);
    steps.classList.toggle('open');
    btn.textContent = steps.classList.contains('open') ? '▲ Hide Steps' : '▼ Show Steps';
}

function renderGuides() {
    const list = document.getElementById('guides-list');
    if (!list) return;
    list.innerHTML = GUIDES.map((g, i) => `
    <div class="guide-card">
      <div class="guide-card-header" id="guide-hdr-${i}" onclick="toggleGuide(${i})">
        <span class="guide-icon">${g.icon}</span>
        <h4>${g.title}</h4>
        <span class="chevron">▼</span>
      </div>
      <div class="guide-card-body" id="guide-body-${i}">
        ${g.tips.map(t => `
          <div class="guide-tip">
            <div class="guide-tip-icon">${t.icon}</div>
            <div class="guide-tip-text"><h5>${t.title}</h5><p>${t.text}</p></div>
          </div>`).join('')}
      </div>
    </div>`).join('');
}

function toggleGuide(i) {
    const hdr = document.getElementById('guide-hdr-' + i);
    const body = document.getElementById('guide-body-' + i);
    hdr.classList.toggle('open');
    body.classList.toggle('open');
}

function drawRing(canvasId, pct, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const cx = 60, cy = 60, r = 48, lw = 10;
    ctx.clearRect(0, 0, 120, 120);
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = '#EEE9FF'; ctx.lineWidth = lw; ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, r, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * 2 * pct / 100));
    ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.stroke();
}

function initCharts() {
    drawRing('ring1', 72, '#7C6FCD');
    drawRing('ring2', 58, '#3DBDA7');
    drawRing('ring3', 81, '#FF7B6B');
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
            datasets: [
                { label: 'Communication', data: [40, 48, 55, 60, 67, 72], borderColor: '#7C6FCD', backgroundColor: 'rgba(124,111,205,0.1)', tension: 0.4, fill: true },
                { label: 'Social Skills', data: [30, 35, 40, 46, 52, 58], borderColor: '#3DBDA7', backgroundColor: 'rgba(61,189,167,0.1)', tension: 0.4, fill: true },
                { label: 'Motor Skills', data: [55, 62, 68, 72, 77, 81], borderColor: '#FF7B6B', backgroundColor: 'rgba(255,123,107,0.1)', tension: 0.4, fill: true }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } } },
            scales: { y: { min: 0, max: 100, ticks: { callback: v => v + '%' } } }
        }
    });
}

// Breathing exercise
let breathPhase = 'idle';
let breathTimer = null;
function startBreathing() {
    const circle = document.getElementById('breath-circle');
    const label = document.getElementById('breath-label');
    if (breathPhase !== 'idle') {
        clearTimeout(breathTimer); breathPhase = 'idle';
        circle.className = 'breathing-circle'; circle.textContent = 'Tap to Start'; label.textContent = ''; return;
    }
    function inhale() { breathPhase = 'inhale'; circle.className = 'breathing-circle inhale'; circle.textContent = 'Breathe In'; label.textContent = '4 seconds...'; breathTimer = setTimeout(hold, 4000); }
    function hold() { breathPhase = 'hold'; circle.className = 'breathing-circle'; circle.textContent = 'Hold'; label.textContent = '4 seconds...'; breathTimer = setTimeout(exhale, 4000); }
    function exhale() { breathPhase = 'exhale'; circle.className = 'breathing-circle exhale'; circle.textContent = 'Breathe Out'; label.textContent = '4 seconds...'; breathTimer = setTimeout(inhale, 4000); }
    inhale();
}

window.addEventListener('DOMContentLoaded', () => {
    renderSchools();
    renderHospitals();
    renderPlayAreas();
    renderActivities();
    renderGuides();
    initCharts();
});
