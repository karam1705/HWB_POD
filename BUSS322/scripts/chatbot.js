// ── POD AI Chatbot ──
const BOT_RESPONSES = [
    {
        keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
        response: "Hello! 👋 I'm Lily, your POD assistant. I'm here to help you with any questions about supporting your child. What would you like to know today?"
    },
    {
        keywords: ['feed', 'eating', 'food', 'meal', 'diet', 'picky', 'texture'],
        response: "🍽️ <strong>Feeding Tips:</strong><br>• Offer foods with consistent textures your child prefers<br>• Use divided plates to keep foods separate<br>• Create a calm, routine mealtime environment<br>• Try food chaining — gradually introduce new foods similar to accepted ones<br>• Avoid pressure; it can increase food aversion<br><br>Check the <em>Parent Guides → Feeding</em> section for detailed strategies!"
    },
    {
        keywords: ['bath', 'shower', 'hygiene', 'wash', 'clean'],
        response: "🛁 <strong>Bath & Hygiene Tips:</strong><br>• Use visual schedules showing each step<br>• Keep water temperature consistent<br>• Use fragrance-free, gentle products<br>• Let your child hold a comfort item during bathing<br>• Try a handheld showerhead for more control<br><br>See <em>Parent Guides → Bathing & Hygiene</em> for a full routine!"
    },
    {
        keywords: ['sleep', 'bedtime', 'night', 'routine', 'tired'],
        response: "😴 <strong>Sleep Routine Tips:</strong><br>• Maintain a consistent bedtime — same time every night<br>• Create a wind-down routine: bath → story → quiet time<br>• Keep the bedroom cool, dark, and quiet<br>• Use weighted blankets for sensory comfort<br>• Avoid screens 1 hour before bed<br><br>Visit <em>Parent Guides → Sleep Routines</em> for more!"
    },
    {
        keywords: ['meltdown', 'tantrum', 'calm', 'angry', 'upset', 'behavior', 'behaviour'],
        response: "💙 <strong>Managing Meltdowns:</strong><br>• Stay calm yourself — your energy affects your child<br>• Remove them from overwhelming stimuli<br>• Offer a quiet, safe space<br>• Don't try to reason during a meltdown — wait until they're calm<br>• Use a calm, low voice<br>• Identify triggers to prevent future episodes<br><br>See <em>Parent Guides → Behavior & Meltdowns</em> for full strategies!"
    },
    {
        keywords: ['communicate', 'talk', 'speech', 'language', 'words', 'aac', 'sign'],
        response: "🗣️ <strong>Communication Support:</strong><br>• Use simple, clear language with visual supports<br>• Try PECS (Picture Exchange Communication System)<br>• Basic sign language can bridge communication gaps<br>• AAC apps like Proloquo2Go are excellent tools<br>• Always respond to any communication attempt — verbal or non-verbal<br><br>Check <em>Parent Guides → Communication</em> for resources!"
    },
    {
        keywords: ['school', 'enroll', 'education', 'class', 'teacher'],
        response: "🏫 <strong>Schools & Education:</strong><br>• Look for schools with inclusive education programs<br>• Ask about IEP (Individual Education Plan) support<br>• Visit the <em>Schools Directory</em> tab to find autism & Down syndrome-friendly schools near you<br>• Request a school tour before enrolling<br>• Connect with other parents for recommendations!"
    },
    {
        keywords: ['hospital', 'doctor', 'therapy', 'therapist', 'center', 'specialist'],
        response: "🏥 <strong>Healthcare & Therapy:</strong><br>• Speech therapy, occupational therapy, and ABA are highly recommended<br>• Visit the <em>Hospitals & Centers</em> tab for a directory of specialists<br>• Early intervention is key — the earlier, the better<br>• Keep a health journal to track progress and share with doctors<br>• Ask about telehealth options for convenience!"
    },
    {
        keywords: ['play', 'park', 'playground', 'outdoor', 'sensory'],
        response: "🛝 <strong>Play & Recreation:</strong><br>• Sensory-friendly parks have quiet zones and adapted equipment<br>• Visit the <em>Play Areas</em> tab for curated locations<br>• Swings and trampolines provide excellent sensory input<br>• Water play is calming and engaging<br>• Always supervise near water and heights!"
    },
    {
        keywords: ['activity', 'activities', 'home', 'bored', 'engage', 'fun'],
        response: "🎨 <strong>Home Activities:</strong><br>• Sensory bins (rice, sand, water beads) are great for exploration<br>• Music and rhythm activities support communication<br>• Simple puzzles build cognitive skills<br>• Yoga and stretching help with body awareness<br><br>Visit the <em>Home Activities</em> tab for step-by-step activity guides!"
    },
    {
        keywords: ['relax', 'stress', 'anxious', 'anxiety', 'overwhelm', 'sensory'],
        response: "🧘 <strong>Calming Techniques:</strong><br>• Deep pressure (firm hugs, weighted blankets) is very soothing<br>• Breathing exercises — breathe in for 4, hold for 4, out for 4<br>• Dim lighting and soft music create a calm environment<br>• Fidget tools and chew necklaces help with sensory needs<br><br>Visit the <em>Calm & Relax</em> tab for guided exercises!"
    },
    {
        keywords: ['sos', 'emergency', 'help', 'urgent', 'danger'],
        response: "🆘 <strong>Emergency Help:</strong><br>Use the <strong>SOS button</strong> at the top of the screen to immediately call for help.<br><br>For non-urgent situations:<br>• Stay calm and ensure your child's safety first<br>• Remove hazards from the environment<br>• Call your child's doctor or therapist<br>• Emergency: 999 (UAE) or 911"
    },
    {
        keywords: ['autism', 'autistic', 'asd', 'spectrum'],
        response: "💜 <strong>About Autism:</strong><br>Autism Spectrum Disorder (ASD) affects communication, behavior, and social interaction. Every child is unique!<br><br>Key support strategies:<br>• Consistent routines and visual schedules<br>• Sensory-friendly environments<br>• Positive reinforcement<br>• Early intervention therapy<br>• Patience and unconditional love 💙"
    },
    {
        keywords: ['down syndrome', 'downs', 'trisomy'],
        response: "💛 <strong>About Down Syndrome:</strong><br>Down syndrome (Trisomy 21) is a chromosomal condition affecting development. Children with Down syndrome can thrive with the right support!<br><br>Key support strategies:<br>• Speech and language therapy<br>• Physical and occupational therapy<br>• Inclusive education<br>• Social skills development<br>• Celebrate every milestone! 🌟"
    },
    {
        keywords: ['routine', 'schedule', 'structure', 'daily'],
        response: "📅 <strong>Daily Routines:</strong><br>• Visual timetables with pictures help children understand what comes next<br>• Use timers to signal transitions between activities<br>• Keep routines consistent — changes should be prepared for in advance<br>• Morning and bedtime routines are especially important<br><br>See <em>Parent Guides → Daily Routines</em> for printable schedules!"
    },
    {
        keywords: ['thank', 'thanks', 'great', 'helpful', 'awesome'],
        response: "You're so welcome! 💜 You're doing an amazing job supporting your child. Remember, you're not alone — this community is here for you. Is there anything else I can help with?"
    }
];

const DEFAULT_RESPONSE = "I'm here to help! 💙 You can ask me about feeding, bathing, sleep, behavior, communication, schools, therapy centers, activities, or calming techniques. What would you like to know?";

function getBotResponse(message) {
    const lower = message.toLowerCase();
    for (const item of BOT_RESPONSES) {
        if (item.keywords.some(kw => lower.includes(kw))) {
            return item.response;
        }
    }
    return DEFAULT_RESPONSE;
}

function initChatbot() {
    const fab = document.getElementById('chatbot-fab');
    const win = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('chatbot-close');
    const input = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');
    const msgs = document.getElementById('chatbot-messages');

    if (!fab) return;

    fab.addEventListener('click', () => {
        win.classList.toggle('open');
        if (win.classList.contains('open')) input.focus();
    });
    closeBtn.addEventListener('click', () => win.classList.remove('open'));

    function addMsg(text, role) {
        const div = document.createElement('div');
        div.className = `chat-msg ${role}`;
        const avatar = document.createElement('div');
        avatar.className = 'msg-avatar';
        avatar.textContent = role === 'bot' ? '🤖' : '👤';
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.innerHTML = text;
        div.appendChild(avatar);
        div.appendChild(bubble);
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
    }

    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;
        addMsg(text, 'user');
        input.value = '';
        setTimeout(() => {
            addMsg(getBotResponse(text), 'bot');
        }, 600);
    }

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });

    // Suggestion chips
    document.querySelectorAll('.suggestion-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            input.value = chip.textContent;
            sendMessage();
            win.classList.add('open');
        });
    });
}
