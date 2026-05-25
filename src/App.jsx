import { useState, useEffect } from "react";

const PEOPLE = {
  Akash: { emoji: "💙", color: "#7eb8f7", glow: "rgba(126,184,247,0.3)", label: "Akash" },
  Anumaa: { emoji: "🌸", color: "#ffb3c8", glow: "rgba(255,150,180,0.3)", label: "Anumaa" },
};

const CURRENT_MOODS = [
  { emoji: "😊", label: "Happy" },
  { emoji: "🥰", label: "In Love" },
  { emoji: "😍", label: "Excited" },
  { emoji: "💕", label: "Romantic" },
  { emoji: "🥺", label: "Missing You" },
  { emoji: "😌", label: "Peaceful" },
  { emoji: "😴", label: "Sleepy" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😤", label: "Stressed" },
  { emoji: "😠", label: "Angry" },
  { emoji: "😂", label: "Silly" },
  { emoji: "🤤", label: "In Mood" },
];

const Q_MOODS = ["💭 Deep", "😄 Playful", "🌙 Dreamy", "💕 Romantic", "🌱 Growth"];

const QUESTION_BANK = {
  "💭 Deep": [
    "What\'s a fear about us you\'ve never said out loud?",
    "What does home feel like to you right now — a place or a person?",
    "What\'s something about yourself you hope I always see clearly?",
    "When did you first know I was someone truly special to you?",
    "What\'s the one thing about this distance that\'s made you stronger?",
    "Is there a version of yourself you only show me?",
    "What\'s a dream you\'ve given up on that I could help you believe in again?",
    "What does love feel like to you on your hardest days?",
    "What\'s something you wish I understood about you without having to explain?",
    "What\'s the most honest thing you\'ve ever wanted to say to me?",
    "When you imagine our future, what\'s the first thing you see?",
    "What\'s a part of yourself you\'re still figuring out?",
    "What\'s one thing that\'s changed in you since we\'ve been together?",
    "Is there something you\'re quietly afraid of losing?",
    "What does it mean to truly know someone, to you?",
    "What\'s a truth you\'ve come to accept that once scared you?",
    "What would you want me to remember about you, always?",
    "What\'s a feeling only I seem to bring out in you?",
    "What\'s one thing about our bond you never want to take for granted?",
    "What\'s the most vulnerable you\'ve ever let yourself be with me?",
    "What\'s something you carry alone that you wish you could share?",
    "Is there a moment when you felt completely understood by me?",
    "What do you think we still don\'t know about each other?",
    "What\'s the one word that captures how I make you feel?",
    "What matters more to you now than it did before us?",
    "What\'s a question you\'ve wanted to ask me but haven\'t yet?",
    "What does it feel like when I\'m proud of you?",
    "What\'s something you\'ve learned about love from this distance?",
    "When life feels heavy, what thought of me gets you through?",
    "What\'s the one thing about us that still surprises you?",
    "What belief do you hold about love that you\'ve never said aloud?",
    "How has loving me changed the way you see yourself?",
    "What\'s a side of you that only appears when you\'re with me?",
    "What do you think is the hardest thing about loving someone?",
    "What\'s a moment you wish you could have handled differently with me?",
    "What does commitment mean to you beyond just staying?",
    "What\'s a wound you carry that love has slowly started healing?",
    "How do you know when you\'ve truly forgiven someone?",
    "What do you wish you could say to a younger version of yourself about love?",
    "What\'s something about your upbringing that shapes how you love?",
    "What does feeling truly safe with someone look like to you?",
    "What\'s a version of yourself you\'re still becoming?",
    "What does loneliness feel like to you and how do I ease it?",
    "What\'s something you\'ve never fully let yourself grieve?",
    "What does trust feel like physically in your body?",
    "What\'s a value you hold that most people don\'t know about?",
    "What would you want me to do if I saw you struggling but you wouldn\'t admit it?",
    "What does emotional intimacy mean to you?",
    "What\'s something you want to be forgiven for that you haven\'t asked yet?",
    "What\'s a recurring thought you have about us that comforts you?",
    "What does unconditional love feel like to you in practice?",
    "What\'s a part of your past you\'re still making peace with?",
    "What do you want our relationship to teach you by the time we\'re old?",
    "What\'s the most profound thing someone has ever said to you about love?",
    "What does being truly loved by me look like, in your eyes?",
    "What\'s something you\'ve had to relearn about yourself while we\'ve been apart?",
    "What\'s a truth about you that you\'ve only just started accepting?",
    "How do you want to grow as a person this year?",
    "What\'s something that broke you open in a way that made you better?",
    "What\'s the most important thing you\'ve learned about yourself through heartbreak?",
    "What does the word \'forever\' mean to you when you say it to me?",
    "What\'s something you\'ve never told anyone that you feel safe telling me?",
    "What\'s a moment in your life that quietly changed everything?",
    "What do you want people to feel when they\'re around you?",
    "What\'s something about the world that breaks your heart a little?",
    "What does courage look like to you in relationships?",
    "What\'s a part of loving me that\'s challenged you to grow?",
    "What\'s a promise to yourself that you\'re still keeping?",
    "What do you think we owe each other in love?",
    "What\'s something beautiful about pain that you\'ve only just understood?",
    "What does home mean to you on your worst days?",
    "What\'s a moment of silence between us that said everything?",
    "What\'s the most important question you think two people should ask each other?",
    "What does integrity mean to you in a relationship?",
    "What\'s a piece of advice you got about love that turned out to be wrong?",
    "What\'s something you\'ve stopped apologising for?",
    "What would you do if you weren\'t afraid?",
    "What\'s a thing you do for me that you wish I noticed more?",
    "What does patience feel like when you\'re practising it with me?",
    "What\'s something you love about yourself that I helped you see?",
    "What\'s a boundary you\'ve set that made you proud?",
    "What does being known by someone do to your heart?",
    "What\'s a moment that made you feel like you belonged to something larger than yourself?",
    "What\'s something you\'ve had to unlearn about what love is supposed to look like?",
    "What do you think makes two people genuinely compatible?",
    "What\'s a thing you\'ve accepted about yourself that used to be a source of shame?",
    "What does \'I love you\' mean when you say it to me versus when others say it?",
    "What\'s a memory of us that you return to when things feel hard?",
    "What\'s something about the way you were raised that you\'ve consciously chosen to change?",
    "What does being fully present feel like to you?",
    "What\'s a part of yourself you hope I never stop seeing?",
    "What would loving me more gently look like for you?",
    "What\'s something you\'ve had to accept you cannot control?",
    "What does growing old together mean to you?",
    "What\'s a small act of love that has meant more to you than you expected?",
    "What\'s a story about your past that you\'re still writing the ending for?",
    "What does crying feel like to you when you\'re not holding it back?",
    "What\'s one thing you want us to understand about each other better?",
    "What does a good life mean to you right now?",
    "What\'s something you\'ve started believing in because of me?",
    "What\'s a piece of yourself you\'ve had to protect that you\'re slowly opening up?",
    "What do you think about when you can\'t sleep?",
    "What\'s something that scares you about the future that we\'ve never talked about?",
    "What\'s a form of love you had to learn to receive?",
    "What does it feel like when I understand you without explanation?",
    "What\'s something you\'ve always wanted someone to ask you?",
    "What makes you feel most alive?",
    "What\'s a part of your story that shaped you most?",
    "What do you hope I\'m still doing in ten years?",
    "What\'s something you believe that most people would disagree with?",
    "What\'s a dream you\'ve been afraid to say out loud?",
    "What does it mean to you to be a good partner?",
    "What\'s an emotion you\'ve never quite had words for?",
    "What\'s something you\'ve protected for so long you forgot it needed healing?",
    "What do you want your love to feel like to the people who receive it?",
    "What\'s a thing you\'ve done for me that came at a cost to yourself?",
    "What\'s something you hope love teaches you by the end of your life?",
    "What does vulnerability cost you, and do you think it\'s worth it?",
    "What\'s something you\'ve had to let yourself want again?",
    "What does compassion towards yourself look like for you?",
    "What\'s a part of you that needs more room to breathe?",
    "What does it mean to you to be deeply understood?",
    "What\'s a moment in our relationship where you chose us over yourself?",
    "What\'s something you\'ve only recently allowed yourself to feel?",
    "What does \'enough\' feel like to you in love?",
    "What\'s a belief about yourself that I\'ve helped you challenge?",
    "What does it feel like when you let yourself be fully loved?",
    "What\'s one thing you want to say to me that you\'ve been saving?",
    "What does it mean to you that I choose you every day?",
    "What\'s a part of loving you that costs me, and do you see it?",
    "What\'s the most honest version of yourself you\'ve shown me?",
    "What do you think is our greatest strength as a couple?",
    "What\'s a thing you hope never changes between us?",
    "What\'s something you admire about the way I love?",
    "What\'s a moment where you felt truly held by me?",
    "What do you want us to be for each other when the world feels too loud?",
    "What\'s a thing about yourself you want to offer more of in our relationship?",
    "What\'s a feeling you get with me that you\'ve never felt with anyone else?",
    "What does it feel like to imagine a world without me?",
    "What\'s something you\'ve forgiven me for that I might not know about?",
    "What do you want our relationship to stand for?",
    "What\'s a way I\'ve helped you become someone you\'re proud of?",
    "What does it feel like when you miss me in your body not just your mind?",
    "What\'s a version of our love you want to grow into?",
    "What do you hope people see when they look at us?",
    "What\'s something you want me to always fight for?",
    "What\'s the most meaningful thing I\'ve ever done for you?",
    "What does it mean to you to be someone\'s person?",
    "What\'s something you\'ve been sitting with that you haven\'t found words for yet?",
    "What do you think love asks of us that we don\'t always want to give?",
    "What\'s something you\'d want to start over with me, if you could?",
    "What does devotion look like in your mind?",
    "What\'s a thing you do to take care of your heart that I might not know about?",
    "What does it feel like when things between us feel effortless?",
    "What\'s the version of our life together that makes you feel most peaceful?",
    "What\'s something you wish I\'d ask you more often?",
    "What does missing someone do to the way you understand love?",
    "What\'s a gift you\'ve given me that wasn\'t material?",
    "What do you think makes us rare?",
    "What\'s a thing about me that first made you think this could be real?",
    "What does it feel like to grow alongside someone?",
    "What\'s a thing about the way we communicate that you want to protect?",
    "What does showing up fully in a relationship cost you?",
    "What\'s a moment when I made you feel like you were enough exactly as you are?",
    "What does belonging feel like to you?",
    "What\'s something you\'ve wanted to tell me about how I make you feel?",
    "What\'s a dream for us that you\'ve been holding quietly?",
    "What does it mean to you that we chose each other across this distance?",
    "What\'s something you\'ve realised about yourself from loving me?",
    "What do you want to always remember about this phase of our life?",
    "What\'s a thing you\'re grateful for about how we\'ve handled hardship?",
    "What does fighting for someone look like to you?",
    "What\'s a truth about love that only distance has taught you?",
    "What\'s the part of you that loves me most — what does it look like?",
    "What do you want our story to say about us?",
    "What\'s a moment where you chose to stay that you\'re proud of?",
    "What does it feel like when I say your name?",
    "What\'s something I\'ve said that you\'ve held onto without telling me?",
    "What does intimacy without physical closeness feel like for you?",
    "What\'s a thing you thought love was that turned out to be something else entirely?",
    "What does it mean to you that I know your flaws and stay?",
    "What\'s the most honest thing our relationship has taught you about yourself?",
    "What\'s a way I\'ve surprised you with how I love?",
    "What does growing through pain together mean to you?",
    "What\'s the most important thing we\'ve built that no one else can see?",
    "What does it feel like to trust someone completely?",
    "What\'s something about us that you think is worth protecting most?",
    "What does it mean to love someone bravely?",
    "What\'s a feeling you can only find with me?",
    "What\'s something about your inner world you want me to understand better?",
    "What does emotional safety mean to you in our relationship?",
    "What\'s a version of yourself that only exists because of me?",
    "What\'s the most unexpected thing love has asked of you?",
    "What\'s something you\'re still learning about how to love well?",
    "What does it mean to you to be chosen again and again?",
    "What\'s a quiet act of love you do for me that goes unseen?",
    "What does it feel like to be the person I think of first?",
    "What\'s a part of yourself you\'ve shared with me that you\'ve never shared before?",
    "What does hope feel like when it\'s tied to someone else?",
    "What\'s something you\'ve accepted about love that once felt impossible to accept?",
    "What\'s a thing you love about the way we grow together?",
    "What does it feel like when I choose you without hesitation?",
    "What\'s the most courageous thing you\'ve ever done in love?",
    "What\'s something about our future that feels both terrifying and beautiful?",
    "What does it mean to you that we are building something real?",
    "What\'s a thing about loving me that has surprised you?",
    "What does it feel like when we are completely in sync?",
    "What\'s the deepest thing you want me to know about your heart?",
    "What\'s a part of us you want to remember when we are old?",
    "What does wanting the best for someone look like when it costs you?",
    "What\'s something you\'ve never let yourself fully feel until now?",
    "What does it mean to you to love without conditions?",
    "What\'s a memory of a moment when everything felt exactly right between us?",
    "What\'s something you\'d tell a stranger about what love really is?",
    "What does it mean to you that I see you — really see you?",
    "What\'s a longing you carry for our future that you haven\'t spoken yet?",
    "What do you think love looks like when it\'s grown and quiet and sure?",
    "What\'s something about yourself you want to offer me more of?",
    "What does it feel like when we are both trying at the same time?",
    "What\'s a truth that only loving someone long-distance could have taught you?",
    "What does it mean for someone to truly hold space for you?",
    "What\'s a promise you\'ve made to yourself about how you\'ll love?",
    "What\'s the most beautiful thing about the love we have right now, even across distance?",
    "What does it feel like when you know someone is always in your corner?",
    "What\'s something you\'ve started to believe about yourself because I believe it?",
    "What do you hope we are still saying to each other in thirty years?",
    "What\'s a thing about our love that is uniquely ours?",
    "What does it mean to you when I say I\'m proud of you?",
    "What\'s something you want to protect about the way we love each other?",
    "What does it feel like to know that someone is choosing you from far away?",
    "What\'s the most honest version of the future you want for us?",
    "What does grace mean to you in a relationship?",
    "What\'s a thing I do that makes you feel profoundly cared for?",
    "What does it feel like to be truly cherished?",
    "What\'s a version of yourself that this love has made possible?",
    "What do you think is worth any amount of distance to protect?",
    "What\'s a small thing about us that makes you sure we\'re right for each other?",
    "What does it feel like to miss someone who also misses you just as much?",
    "What\'s a thing you want to be better at for the sake of us?",
    "What\'s the most beautiful thing about who you are that I want you to never lose?",
    "What does it mean to you to be someone\'s safe place?",
    "What\'s a way I\'ve changed your life that I might not fully understand?",
    "What does joy feel like when it\'s connected to another person?",
    "What\'s a thing about loving someone that you only learn with time?",
    "What does it feel like to imagine telling our story someday?",
    "What\'s a part of your heart that has only opened up because of me?",
    "What does it mean to you to love someone who is also becoming?",
    "What\'s something about this phase of our story that you want to hold onto?",
    "What does it feel like when you know without doubt that this is love?",
    "What\'s the most important thing you want me to always know about you?",
    "What\'s something you\'ve never quite been able to say but have always felt?",
    "What does it feel like to know that I am always thinking of you?",
    "What\'s one thing you want us to figure out together this year?",
    "What does it mean to be loved in the way that I love you?",
    "What\'s a dream that only becomes possible if we are together?",
    "What does it feel like to grow in love and in yourself at the same time?",
    "What\'s the most meaningful silence we have ever shared?",
    "What does choosing love every day actually feel like from the inside?",
    "What\'s something you know about love now that you couldn\'t have known before us?",
    "What does it mean to you that someone loves your becoming, not just your being?",
    "What\'s a thing about how I love you that you want more of?",
    "What\'s the most important question you have about our future?",
    "What does it feel like when love is also your best friendship?",
    "What\'s a part of loving you that has made me better without you realising it?",
    "What does it mean to you that we are still here, still choosing this?",
    "What\'s something about the way we love that you think is rare in this world?",
    "What do you think this love is still teaching you?",
    "What\'s the one thing you most want to say to me right now?",
    "What does it feel like to know that the best is still ahead of us?",
    "What\'s a version of grief you\'ve carried that you\'ve never named?",
    "What does it feel like when love asks more of you than you expected?",
    "What\'s something you\'ve had to relearn about yourself after being hurt?",
    "What does it mean to you to be truly present with another person?",
    "What\'s a way you\'ve changed that you didn\'t notice until someone pointed it out?",
    "What does it feel like to love someone through their worst version of themselves?",
    "What\'s a question you\'re afraid to ask yourself?",
    "What does acceptance feel like when you\'ve fought against something for too long?",
    "What\'s a part of yourself you protect the most fiercely?",
    "What does it feel like to stop performing and just be?",
    "What\'s something you\'ve had to ask for that felt impossible to ask for?",
    "What does forgiveness feel like before you\'re ready for it?",
    "What\'s a way you\'ve shown up for yourself this year?",
    "What does it feel like to finally say something you\'ve been holding for too long?",
    "What\'s a version of love you\'ve had to let go of to receive something real?",
    "What does it feel like when someone stays even after seeing your difficult parts?",
    "What\'s a promise to yourself you\'ve been keeping quietly?",
    "What does it feel like to be truly at peace with where you are?",
    "What\'s a thing about yourself you\'ve stopped apologising for?",
    "What does it feel like when someone holds you accountable with love?",
    "What\'s a moment in your life that changed the way you understand kindness?",
    "What does it mean to you to love without losing yourself?",
    "What\'s something you\'ve had to sit with that had no easy answer?",
    "What does wholeness feel like to you on a good day?",
    "What\'s a way you\'ve surprised yourself with how strong you are?",
    "What does it feel like to make a decision entirely for yourself?",
    "What\'s a thing about the way I love you that you haven\'t found the words for?",
    "What does it feel like to be in a relationship that makes you want to be better?",
    "What\'s a version of yourself you\'re most afraid of becoming?",
    "What does it feel like to trust someone with the parts of you still healing?",
    "What\'s a truth about your childhood that still shows up in how you love?",
    "What does it feel like to choose peace over being right?",
    "What\'s something you\'ve had to grieve that wasn\'t a person?",
    "What does it mean to you to love someone who is still figuring themselves out?",
    "What\'s a way you\'ve been gentle with yourself recently that you\'re proud of?",
    "What does it feel like to want something deeply and still be unsure you deserve it?",
    "What\'s a belief about relationships you\'ve had to dismantle and rebuild?",
    "What does it feel like when the right person sees the parts you tried to hide?",
    "What\'s something about your emotional world that you wish was easier to explain?",
    "What does it feel like to let someone love you without bracing for it to end?",
    "What\'s a version of strength that looks like softness to you?",
    "What does it feel like to say no to something that used to own you?",
    "What\'s a thing you\'ve said to me that you felt the most?",
    "What does it feel like to be loved patiently when you\'re still learning?",
    "What\'s a wound that\'s been slowly becoming a scar?",
    "What does it feel like to be held in someone\'s thoughts across a distance?",
    "What\'s the most honest conversation you\'ve ever had with yourself?",
    "What does it feel like to know that loving someone can also change you?",
    "What\'s a moment you chose yourself that cost you something?",
    "What does it feel like to be in the middle of something that will shape you?",
    "What\'s a thing you\'ve had to learn to stop explaining to people who won\'t understand?",
    "What does it feel like to be deeply cared for without conditions?",
    "What\'s a part of your heart that you\'ve never fully shown anyone?",
    "What does it feel like when love is patient in the way you needed it to be?",
    "What\'s something you\'ve stopped hiding about yourself and how did that feel?",
    "What does it feel like to be your own safe place?",
    "What\'s a way you\'ve had to advocate for yourself in love?",
    "What does it feel like to be known and still chosen?",
    "What\'s a version of you that only exists in moments of complete honesty?",
    "What does it feel like when the love you give comes back to you differently?",
    "What\'s something about the way you love that comes from the deepest part of you?",
    "What does it feel like to grow inside a love that gives you room?",
    "What\'s a thing you\'ve had to accept about love that no one warned you about?",
    "What does it feel like to finally stop waiting for permission to be yourself?",
    "What\'s the most honest thing you believe about who you are?",
    "What does it feel like when the distance collapses in a single conversation?",
    "What\'s something you\'ve had to learn to hold loosely even though it matters deeply?",
    "What does it feel like to know someone is thinking of you from far away right now?",
    "What\'s a truth about yourself that you\'ve only just started to trust?",
    "What does it feel like to be seen by the person you love most?",
    "What\'s a part of your story that you\'re still making meaning from?",
    "What does it feel like to be loved exactly as you are, not as you will be?",
    "What\'s something about us that you believe will still be true in twenty years?",
    "What does it feel like when love feels like the safest choice you\'ve ever made?",
    "What\'s a version of yourself you want me to always believe in, even when you forget?",
    "What does it feel like to be the reason someone smiles from the other side of the world?",
    "What\'s the most important thing you\'ve ever decided about love?",
    "What does it feel like to know that this — us — is real and worth everything?",
    "What\'s a thing you\'d want to whisper to me if we were finally in the same room?",
    "What does it feel like to be someone who loves as deeply as you do?",
    "What\'s a truth about us that you hold onto on the hardest days?",
    "What does it feel like to love someone you also deeply admire?",
    "What\'s a thing about this relationship that you believe is genuinely rare?",
    "What does it feel like to carry someone in your heart across every moment of your day?",
    "What\'s the most important question you\'ve ever asked yourself about love?",
    "What does it feel like to be in love and still becoming?",
    "What\'s a thing you know about love now that you couldn\'t have learned any other way?",
    "What does it feel like when the person who knows you best also chooses you?",
    "What\'s something you want to say to me today that would say everything?",
    "What does it feel like to know we are building something that matters?",
    "What\'s the truest thing you feel about us right now, in this moment?",
    "What does it feel like to be loved by someone who sees your whole self and stays?",
    "What\'s the most important thing you want me to know about who you are?",
    "What\'s a version of love you\'ve had to unlearn before you could receive the real thing?",
    "What does it feel like when someone\'s patience with you heals something old?",
    "What\'s the most important thing you\'ve ever chosen to believe about yourself?"
  ],
  "😄 Playful": [
    "If our relationship had a theme song, what would it be and why?",
    "What\'s the weirdest thing you\'ve done this week you haven\'t told me?",
    "If we were a movie, what genre would we be?",
    "What would our couple name be if we had one?",
    "If I showed up at your door right now, what would your reaction be?",
    "What\'s the most ridiculous argument we could ever have?",
    "If we had a pet together, what would you name it?",
    "What\'s something you\'d challenge me to that you\'d definitely win?",
    "If you could swap lives with me for a day, what\'s the first thing you\'d do?",
    "What emoji is most \'us\' and why?",
    "What\'s a completely random fact you thought of me during?",
    "If we had a reality TV show, what would it be called?",
    "What\'s the most chaotic thing we\'d do on a spontaneous trip?",
    "If I were a food, what would I be?",
    "What\'s a childhood habit you still secretly do?",
    "What fictional couple are we most like?",
    "If you could give us a superpower as a couple, what would it be?",
    "What\'s the funniest misunderstanding we\'ve ever had?",
    "What\'s something totally random that reminds you of me?",
    "If we competed on a game show, which one would we crush?",
    "What\'s the silliest nickname you\'ve almost called me?",
    "What\'s a movie you\'d force me to watch on our next movie night?",
    "If our friendship had a mascot, what would it be?",
    "What\'s one thing you do that you think I\'d find hilarious?",
    "If we wrote a book together, what would the first line be?",
    "What\'s a word you made up that only we would understand?",
    "If you had to describe me in three ridiculous adjectives, what would they be?",
    "What\'s something small you\'d fight me on but know I\'m right about?",
    "What\'s a completely useless skill I have that you secretly love?",
    "What\'s the most dramatic way you\'d tell people we met?",
    "If we could only eat one meal together for the rest of our lives, what would you pick?",
    "What\'s the worst fashion choice you\'ve ever made that you\'d now blame on me?",
    "If I were a weather event, what kind would I be?",
    "What\'s the weirdest dream you\'ve had about us?",
    "If we started a podcast, what would it be about?",
    "What\'s an impression of me you\'d do behind my back?",
    "If you could steal one of my habits, which one would it be?",
    "What\'s the most embarrassing thing I\'ve said that you still think about?",
    "If we had a secret handshake, what would it look like?",
    "What random Wikipedia article do you think perfectly describes me?",
    "If I were a character in a video game, what kind would I be?",
    "What\'s the most chaotic thing we\'d do if we had no responsibilities for a day?",
    "If our relationship had a slogan, what would it be?",
    "What\'s an inside joke we\'d have with our future kids?",
    "If we could only communicate through GIFs for a week, would we survive?",
    "What\'s the silliest argument you could imagine us having in the future?",
    "If I had to be a cartoon character, who would I be?",
    "What\'s a game we\'d both be terrible at but would play anyway?",
    "If we ran a small business together, what would it be?",
    "What\'s a song you\'d dedicate to me as a prank?",
    "If we had matching outfits, what would they look like?",
    "What\'s an absolutely ridiculous bucket list item you want us to do?",
    "If you could rename any day of the week after me, which one?",
    "What\'s the most unprepared you\'ve ever been for something I said?",
    "If I were a planet, which one would I be?",
    "What\'s the strangest compliment you\'d give me?",
    "If our love were a cooking disaster, what happened and did it still taste good?",
    "What\'s a sport we\'d both be equally bad at?",
    "If we could redecorate a room together, which room would be the most fun?",
    "What\'s a completely unnecessary skill you want us to learn together?",
    "If I were a historical figure, who would I be?",
    "What\'s the most extra thing you\'d do to impress me for no reason?",
    "What\'s a holiday tradition we\'d start that would be just for us?",
    "If we had a theme song for our morning routine, what would it be?",
    "What\'s the most ridiculous way you\'d propose to someone hypothetically?",
    "If our relationship had a theme park ride, what would it be?",
    "What\'s something you\'d put in a time capsule for us?",
    "If we could invent a holiday, what would we celebrate?",
    "What\'s the most absurd travel destination you\'d secretly want to visit with me?",
    "If I were a plant, what kind would I be and would I survive?",
    "What\'s the pettiest thing you\'ve ever been competitive about?",
    "If we were in a heist movie together, what would our roles be?",
    "What\'s the most ridiculous rule you\'d add to a relationship contract?",
    "What\'s something you\'d absolutely refuse to share with me?",
    "If our life together were a sitcom, what would the recurring joke be?",
    "What\'s the most dramatic retelling you\'d give of something ordinary we did?",
    "If you could give me a funny award, what would it be called?",
    "What\'s a completely made-up word you\'d invent to describe how I make you feel?",
    "What\'s the most extra way you\'d celebrate a tiny victory with me?",
    "If we were supervillains, what would our evil plan be?",
    "What\'s the most random thing you\'d want us to be experts in?",
    "If our relationship were a board game, what would the rules be?",
    "What\'s the most embarrassing thing that\'s ever happened to you that I still don\'t know?",
    "If we could only use one streaming service forever, what would you pick and why?",
    "What\'s a conspiracy theory you\'d make up just to mess with me?",
    "If I were a type of weather, what would I be on a good day vs a bad day?",
    "What\'s the worst gift you\'ve ever given someone?",
    "If we could have any fictional animal as a pet, what would we choose?",
    "What\'s the most dramatic exit you\'ve ever made from a room?",
    "If we started a cooking show, what would we name it?",
    "What\'s the most ridiculous lie you\'ve told with complete confidence?",
    "If you could add one room to any house you\'d ever live in, what would it be?",
    "What\'s a completely useless superpower you\'d actually want?",
    "If we were stuck in an elevator together for two hours, what would we end up doing?",
    "What\'s the worst movie we\'d unironically love?",
    "If I were a meme, which one would I be?",
    "What\'s the silliest thing you\'re surprisingly good at?",
    "If we adopted a catchphrase, what would it be?",
    "What\'s the most extra plan you\'ve ever made for something simple?",
    "If our relationship had a warning label, what would it say?",
    "What\'s the most ridiculous argument you\'ve ever won?",
    "If you could replace one word in the dictionary with a word we made up, what would it be?",
    "What\'s the weirdest talent you wish you had?",
    "If we were a duo in an action movie, what would our team name be?",
    "What\'s the most dramatic thing you\'ve done when you were bored?",
    "If you could be a character in any book, who would you pick for me?",
    "What\'s something you\'d absolutely roast me for in a friendly way?",
    "If we started a band, what genre would we be and what would we name it?",
    "What\'s the most unnecessary purchase you\'ve ever been proud of?",
    "If our relationship had a Wikipedia page, what would the controversies section say?",
    "What\'s a totally made-up award category I\'d win every year?",
    "If I could only eat one thing for a year, what would you choose for me?",
    "What\'s the most chaotic thing we\'d do at a family gathering?",
    "What\'s a completely random skill you\'ve wanted to show off to me?",
    "If we hosted a dinner party, what\'s the most chaotic thing that would happen?",
    "What\'s the funniest autocorrect fail you\'ve ever sent?",
    "If we were a pair of socks, what pattern would we be?",
    "What\'s the most elaborate prank you\'d pull on me?",
    "If I were a movie villain, what would my motive be?",
    "What\'s the silliest thing you\'ve been deeply passionate about?",
    "If we could have any celebrity referee our arguments, who would it be?",
    "What\'s the most dramatic thing you\'ve ever done for a snack?",
    "If our relationship were a flavour of ice cream, what would it be?",
    "What\'s the weirdest thing you\'d want engraved on something?",
    "If we wrote a children\'s book about us, what would it be about?",
    "What\'s the most extra thing you\'d do just to make me laugh?",
    "If I had a theme song that played every time I walked into a room, what would it be?",
    "What\'s something you\'d absolutely win an argument about just based on confidence?",
    "If we ran for office together, what would our campaign promise be?",
    "What\'s a ridiculous hat you\'d wear if you knew you could pull it off?",
    "If we could design our dream snack, what would it involve?",
    "What\'s the most unexpected thing that has genuinely made you laugh recently?",
    "If our pet could talk, what\'s the first thing it would tell us to stop doing?",
    "What\'s a word that describes me that isn\'t in the dictionary?",
    "If we had our own island, what\'s the first rule we\'d make?",
    "What\'s the most dramatic thing you\'ve said in a completely low-stakes situation?",
    "If we could win any award at a completely made-up ceremony, what would it be for?",
    "What\'s a completely random fact about yourself that no one ever asks about?",
    "If you could only communicate with me through song titles for a day, what\'s the first one you\'d use?",
    "What\'s the most absurd thing you\'ve been scared of that you\'d now admit to me?",
    "If we competed in the Olympics, what sport would we invent for ourselves?",
    "What\'s the most ridiculous thing you\'d do just to avoid doing something boring?",
    "If I had a nemesis in a movie, who would play them?",
    "What\'s a completely unnecessary debate you\'d want to have with me right now?",
    "If we designed a board game, what would the winning condition be?",
    "What\'s the most theatrical way you\'ve ever said goodbye to someone?",
    "If we were both characters in a fairytale, what would our story be?",
    "What\'s the most extra compliment you\'ve ever received that was genuinely weird?",
    "If we could skip one phase of adulthood entirely, which one?",
    "What\'s a nonsense rule you\'d add to the way we spend Sundays?",
    "If I were a constellation, what would you name it?",
    "What\'s the most ridiculous reason you\'ve ever been proud of yourself?",
    "If we could order anything for delivery at 3am, what would we get?",
    "What\'s a totally absurd game show you\'d want us to compete on?",
    "If you could prank someone famous just once, who and how?",
    "What\'s the silliest tradition you\'d want us to have?",
    "If our grocery cart told a story about us, what would it be?",
    "What\'s the most dramatic exit from a situation you\'ve ever planned in your head?",
    "If we were two items in a kitchen, what would we be?",
    "What\'s the most legendary thing you\'ve almost done but didn\'t?",
    "If I had a warning label, what would it say?",
    "What\'s the most elaborate plan you\'ve ever made for something very simple?",
    "If we were competitors on a baking show, would we sabotage each other?",
    "What\'s a completely made-up sport we\'d both excel at?",
    "If our relationship were a playlist, what\'s the first and last song?",
    "What\'s the most unnecessary thing you\'ve perfected doing?",
    "If we could live in any fictional universe for one week, where would we go?",
    "What\'s a question you\'ve always wanted to ask a stranger?",
    "If we could have one outrageous luxury for one day only, what would it be?",
    "What\'s the silliest reason you\'ve ever been genuinely offended by something?",
    "If I had a fashion era I belonged in, what would it be?",
    "What\'s the most dramatic retelling of something mundane you\'ve recently done?",
    "If our relationship had an unofficial mascot, what would it look like?",
    "What\'s a skill you\'d want to learn purely to impress me?",
    "If we had a talk show, what\'s the first topic we\'d cover?",
    "What\'s something completely random that gives you disproportionate joy?",
    "If I were a mythological creature, what would I be?",
    "What\'s the most creative excuse you\'ve ever given for being late?",
    "If we were a two-person comedy act, what would our bit be?",
    "What\'s something ridiculous you believe about the universe?",
    "If we were a painting, what style would we be?",
    "What\'s the most chaotic plan you\'ve had that you\'ve never acted on?",
    "If you could assign me a theme sound effect, what would it be?",
    "What\'s a random hobby you\'d want us to try just to see what happens?",
    "If our relationship were a scientific experiment, what would the hypothesis be?",
    "What\'s something you\'d want a documentary about you to be called?",
    "If I were a font, which one would I be?",
    "What\'s the most confident thing you\'ve ever said that you had no basis for?",
    "If we could eat anywhere in the world tonight, where are we going?",
    "What\'s the wildest thing on your bucket list that you haven\'t told me?",
    "If we were two emojis, which would we be together?",
    "What\'s something you secretly want to compete with me on?",
    "If we had to write our own astrology signs, what would mine be?",
    "What\'s the most random thing you\'ve wanted to be an expert in?",
    "If we narrated our own life like a nature documentary, what would today\'s episode be called?",
    "What\'s the best piece of absolutely terrible advice you\'ve ever received?",
    "If I was a dance move, what would I be called?",
    "What\'s the most chaotic gift you\'d ever consider giving me?",
    "If we had a jingle, what would the first line be?",
    "What\'s a question you\'d ask if you knew I\'d answer completely honestly?",
    "If our relationship were a recipe, what are the three most important ingredients?",
    "What\'s the most extra version of a normal day you\'d plan just for fun?",
    "If I were a literary character, who would I be?",
    "What\'s a skill you have that you think would absolutely impress me?",
    "If we could get matching tattoos of something ridiculous, what would it be?",
    "What\'s a completely invented tradition you\'d want us to have every year?",
    "If our mornings had a soundtrack, what would the wake-up song be?",
    "What\'s the most absurd name you\'d give a café we owned together?",
    "If we could swap one habit of each other\'s for a week, what would you choose?",
    "What\'s the most random argument you\'ve had with yourself in your own head?",
    "If we had a secret clubhouse, what would the password be?",
    "What\'s the most theatrical thing you do when you\'re home alone?",
    "If you could rename one common object to make it funnier, what would you pick?",
    "What\'s the most elaborate plan you\'ve thought of just to avoid doing dishes?",
    "If we won a joint award for something absurd, what would your acceptance speech say?",
    "What\'s a strange habit you have that you\'ve never admitted to anyone?",
    "If we were two things in a junk drawer, what would we be?",
    "What\'s the most ridiculous thing you\'ve been completely sure about?",
    "If we made a list of couple rules, what would be rule number one?",
    "What\'s a completely made-up holiday you\'d want us to celebrate?",
    "If we could swap voices for a day, what\'s the first thing you\'d say in mine?",
    "What\'s the pettiest thing you\'ve ever held onto that you\'re ready to laugh about?",
    "If we had a scrapbook of our most chaotic moments, what\'s on the first page?",
    "What\'s something ridiculous you\'ve convinced yourself was a great idea?",
    "If I were a smell, what would I be?",
    "What\'s the most extra thing you\'ve done to avoid a phone call?",
    "If our love story were a meme format, which one would it be?",
    "What\'s a game you\'d play with me that you\'d secretly practise for?",
    "If we could redesign traffic lights, what would the three colours mean?",
    "What\'s a completely odd thing you\'re proud you can do?",
    "If we had a ship name, what would you want it to be?",
    "What\'s the most dramatic way you\'ve made a small decision?",
    "If we could hire anyone to narrate our daily life, who would it be?",
    "What\'s a ridiculous fear you had as a child that you\'d now be embarrassed to admit?",
    "If our relationship were a country, what would the national anthem be?",
    "What\'s a weird thing you do when you\'re stressed that I\'d probably find endearing?",
    "If we could have a famous chef cook us one meal, who and what?",
    "What\'s the most dramatic text you\'ve ever sent by accident?",
    "If we were two characters in an animated film, what would our arc be?",
    "What\'s something about you that\'s genuinely unpredictable even to yourself?",
    "If we made our own cereal, what would it be called and what shape would it be?",
    "What\'s the most creative lie you\'ve told a stranger just to make things interesting?",
    "If I were a season, which one am I and why does it fit?",
    "What\'s a challenge you\'d want us to do on a lazy Saturday just to see if we could?",
    "If you could change one thing about how we met, what would make it more cinematic?",
    "What\'s the most unlikely skill you\'d want to show off at a party?",
    "If we were a comedy duo with catchphrases, what would mine be?",
    "What\'s something completely random you\'d add to a to-do list just to cross it off?",
    "If we could switch roles for a day in each other\'s lives, what\'s the first thing you\'d change?",
    "What\'s the most absurd dream career you\'d take just for the story?",
    "If our relationship had a mascot animal, which one and why?",
    "If we could design our own ice cream flavour, what would we call it?",
    "What\'s a completely made-up rule you\'d add to how we spend Fridays?",
    "If we had to pick one song to play every time we entered a room, what would it be?",
    "What\'s the most ridiculous thing you\'ve believed as a child that you\'d admit now?",
    "If we had a signature move as a couple, what would it look like?",
    "What\'s something totally random that you\'ve become oddly good at?",
    "If we could swap one personality trait with each other for a day, what would you take?",
    "What\'s a fictional world where you think we\'d absolutely thrive?",
    "If I had a sidekick, what kind would I have?",
    "What\'s a completely pointless argument you\'d want to win against me?",
    "If we started a YouTube channel, what would the first video be about?",
    "What\'s the most creative excuse you\'ve ever used to avoid going out?",
    "If our couple was a superhero team, what would our weakness be?",
    "What\'s something you\'ve pretended to know about that you actually knew nothing about?",
    "If we had a secret knock, what would it sound like?",
    "What\'s the most dramatic thing you\'ve done just to make a point?",
    "If I had to be a kitchen appliance, which would I be?",
    "What\'s a completely unnecessary invention you\'d want someone to make?",
    "If we competed in a lip sync battle, what song would you pick for me?",
    "What\'s something you do alone that you\'d be embarrassed to be caught doing?",
    "If we wrote a self-help book, what would the terrible advice chapter be called?",
    "What\'s the most absurd compliment you could pay to a piece of furniture?",
    "If we lived in a video game, what would our side quest be?",
    "What\'s a childhood game you\'d want to play with me right now?",
    "If you had to describe our relationship using only food metaphors, what would you say?",
    "What\'s the most overdramatic thing you\'ve ever done when you were bored?",
    "If we had to compete on a renovation show, what room would be a disaster?",
    "What\'s a completely random country fact you know that has no use but you love?",
    "If you could give me a new name for one day, what would it be?",
    "What\'s the worst movie plot you could invent in thirty seconds?",
    "If we had a houseplant that could talk, what would it say about us?",
    "What\'s a skill you\'d want to put on your CV that no one would understand?",
    "If we entered a costume contest, what would we go as?",
    "What\'s the most dramatically unnecessary thing you\'ve ever bought?",
    "If we had a family motto, what would it be?",
    "What\'s a conspiracy theory you\'d make up about something totally harmless?",
    "If we had an official couple handshake, how many steps would it have?",
    "What\'s the worst business name you could come up with right now?",
    "If we could prank a historical figure, who and how?",
    "What\'s something you\'d nominate yourself for that no one else would think of?",
    "If we had a reality show about our mornings, what would happen in the pilot?",
    "What\'s a talent you have that no competition exists for?",
    "If we could add one emoji that doesn\'t exist yet, what would it be?",
    "What\'s the worst joke you know that you\'ll tell me anyway?",
    "If we had a robot assistant, what\'s the first thing you\'d train it to do?",
    "What\'s something random you\'ve gotten weirdly competitive about?",
    "If we could swap one household task with anyone else in the world, which one?",
    "What\'s the most unhelpful life advice you could give someone?",
    "If we had a warning label on our friendship, what would it say?",
    "What\'s a word you refuse to spell correctly just for fun?",
    "If we had a musical, what would the opening number be called?",
    "What\'s the most absurd thing you\'d want a trophy for?",
    "If we could add one ridiculous holiday to the calendar, what would it celebrate?",
    "What\'s a talent you have that you\'ve never had a reason to use?",
    "If our relationship had a mascot snack, what would it be?",
    "What\'s the most chaotic thing you\'d do if you had one free hour with no consequences?",
    "If we had a cooking segment, what dish would inevitably go wrong?",
    "What\'s a random skill you\'d want to challenge me to learn in one hour?",
    "If we could have a conversation with our ten-year-old selves, what would we warn them?",
    "What\'s a word that sounds completely different to how it looks?",
    "If we had to write a theme song for grocery shopping, what would the chorus be?",
    "What\'s an imaginary competition you\'d want to win just to have the certificate?",
    "If we could design the world\'s most pointless app, what would it do?",
    "What\'s the most unnecessarily dramatic title you could give your own life story?",
    "If we had a catchphrase for every time something goes wrong, what would it be?",
    "What\'s a random category you\'d dominate in a trivia night?",
    "If we started a blog no one asked for, what would it be about?",
    "What\'s a game show format you\'d invent just to embarrass contestants lovingly?",
    "If you could give an acceptance speech for something absurd, what would the award be?",
    "What\'s a ridiculous debate topic you\'d want to argue just for fun?",
    "If we had a secret menu item at our imaginary café, what would it be?",
    "What\'s something you\'d put in a museum exhibit about yourself?",
    "If we had a signature dance move as a couple, describe it in three words.",
    "What\'s the most absurd thing you\'ve ever been completely certain about?",
    "If we ran a tiny zoo, what would our three animals be?",
    "What\'s a random challenge you\'d set me that you\'re sure I\'d fail?",
    "If our relationship had an official scent, what would it be?",
    "What\'s the most theatrical thing you\'ve ever done in a supermarket?",
    "If we could invent our own slang word, what would it mean?",
    "What\'s a ridiculous life rule you\'d want everyone to follow?",
    "If we were two ingredients in a cocktail, what would the drink be called?",
    "What\'s the most unnecessary skill you\'re weirdly proud of?",
    "If we could have a rematch on any argument we\'ve ever had, which one?",
    "What\'s something ridiculous you\'d add to a travel itinerary?",
    "If we lived in a sitcom, what recurring bit would we definitely have?",
    "What\'s a completely random thing you want to learn just to say you did?",
    "If we had a podcast about nothing important, what would episode one be called?",
    "What\'s the most gloriously unnecessary plan you\'ve ever made?",
    "If we had our own emoji pack, what would yours look like?",
    "What\'s something you\'d challenge a stranger to that you\'d definitely win?",
    "If we could have one ridiculous house rule, what would it be?",
    "What\'s the most creative thing you\'ve done when you were completely bored?",
    "If our mornings had credits like a film, who would play each of us?",
    "What\'s a fictional holiday tradition you\'d want to start in our family?",
    "If we competed in a spelling bee for made-up words, what would you submit?",
    "What\'s a ridiculous reason you\'ve given someone for not doing something?",
    "If we wrote a children\'s book about a very dramatic potato, what would happen?",
    "What\'s the most elaborate prank you\'ve planned that you never pulled off?",
    "If we could add one rule to a sport we already love, what would it be?",
    "What\'s something you\'d want to put on a billboard in your hometown?",
    "If we could redesign the alphabet, what letter would we remove?",
    "What\'s the most absurd thing you\'ve ever convinced someone was true?",
    "If we had an annual awards ceremony just for us, what categories would there be?",
    "What\'s a hobby we\'d both pick up for one month and then immediately abandon?",
    "If we could make one app that would genuinely improve our lives, what would it do?",
    "What\'s a random object in your room that you could make a documentary about?",
    "If we had to write a duet, what would the song be about?",
    "What\'s the most overdramatic way you\'ve ever ended a conversation?",
    "If we had a signature greeting just for us, what would it be?",
    "What\'s the most ridiculous thing you\'d want as a birthday cake?",
    "If we could shrink any problem down to the size of something manageable, what would you pick?",
    "What\'s a random question you\'d want on a first date that would tell you everything?",
    "If we redesigned traffic lights, what would the fourth colour mean?",
    "If we could narrate our grocery shop as an epic adventure, what would the villain be?"
  ],
  "🌙 Dreamy": [
    "If we could spend one magical evening anywhere in the world right now, where?",
    "What\'s a dream you\'ve had recently that you wish was real?",
    "If we could live in any era of history together, when would you pick?",
    "What\'s a place you\'ve never been that you want to experience with me first?",
    "If the universe granted us one extraordinary day together, what would it look like?",
    "What\'s a world from a book or film you\'d want us to escape into?",
    "If stars could carry messages, what would you send me tonight?",
    "What does your most perfect morning with me look like?",
    "If we could build a home anywhere, real or imaginary, where would it be?",
    "What\'s a version of our future that makes your heart feel full?",
    "If time could freeze on one moment between us, which would you choose?",
    "What\'s something beautiful you noticed lately that made you think of me?",
    "If the distance disappeared tonight, what\'s the very first thing you\'d do?",
    "What\'s a quiet, ordinary dream about us that you haven\'t said out loud?",
    "If we had a cottage in the mountains with no Wi-Fi, how would we spend the week?",
    "What\'s a wish you make for us when you see a shooting star?",
    "If we could travel together through a painting, which one would you choose?",
    "What does the best version of our life together feel like to you?",
    "If we had one night under the most perfect sky, what would we talk about?",
    "What\'s a small, beautiful ritual you want us to have someday?",
    "If we could disappear for a month with no responsibilities, where do we go?",
    "What\'s a season that feels like \'us\' to you, and why?",
    "If you could write the next chapter of our story, what happens?",
    "What\'s a dreamy tradition you\'d want us to start when we\'re finally together?",
    "If our love were a landscape, what would it look like?",
    "What\'s a magical thing about this world you want to show me?",
    "If we could revisit any moment from our past in perfect detail, which one?",
    "What does \'forever with you\' feel like when you close your eyes?",
    "If the night sky could show us one image, what would you wish it to be?",
    "What\'s a quiet, perfect scene of us in your mind that brings you peace?",
    "If we could live inside any song for a day, which one would you choose?",
    "What\'s a smell that you think would perfectly describe our life together someday?",
    "If we could build our ideal town from scratch, what would it look like?",
    "What\'s an alternate universe version of us that you like to imagine?",
    "If we had a sailboat and nowhere to be, where would we drift first?",
    "What\'s a dream where I appeared that you remember vividly?",
    "If we could walk through any city in the world at midnight, which one?",
    "What\'s a piece of music that feels like the exact feeling of loving you?",
    "If the ocean could tell our story, what would it say?",
    "What\'s a letter you\'d write to our future selves?",
    "If we could speak any language fluently just for one trip, what would it be?",
    "What\'s a moment in nature that would make the perfect backdrop for us?",
    "If we had a floating house in the sky, what would you put in it?",
    "What\'s a recipe for a meal that tastes like the feeling of us?",
    "If we could be apprentices to any craftsperson in history, who would you choose?",
    "What\'s a version of our reunion you\'ve imagined that feels like a dream?",
    "If love had a colour that was uniquely ours, what would it look like?",
    "What\'s a word in another language that perfectly describes something about us?",
    "If we could live slow for one perfect year with no rush, what would it look like?",
    "What\'s a book you\'d want to read aloud to me on a rainy day?",
    "If we could explore any part of the universe, where would we go first?",
    "What\'s a version of our future home that keeps appearing in your imagination?",
    "If our love were a weather pattern, what would it look like from above?",
    "What\'s a poem you\'d write about us if you weren\'t afraid of being that honest?",
    "If we could time-travel to visit one moment in history together, what would it be?",
    "What\'s a small dream for us that doesn\'t involve grand gestures, just quiet joy?",
    "If the moon could carry a message between us, what would tonight\'s say?",
    "What\'s an imaginary place that only exists for us that you\'ve built in your mind?",
    "If we could create our own constellation, what would we name it?",
    "What\'s a version of the future where everything worked out exactly as you hoped?",
    "If we could live by the sea, what would our mornings look like?",
    "What\'s the most tender dream you\'ve had that felt too soft to tell anyone?",
    "If love had its own country, what would the culture be like?",
    "What\'s a magical hour of day that reminds you most of us?",
    "If we could travel through time just to watch one sunset together, when would it be?",
    "What\'s a dream you\'ve had that left you feeling warm all day?",
    "If we wrote a love letter to be opened in twenty years, what\'s the first line?",
    "What\'s a flower you\'d want growing outside our window someday?",
    "If we could eat one meal in one perfect setting anywhere, what would it be?",
    "What\'s an imagined memory of us that hasn\'t happened yet but feels real?",
    "If love were a texture, what would ours feel like?",
    "What\'s a quiet corner of the world you\'d want us to disappear to for a week?",
    "If we had unlimited time and a train with no destination, where would we end up?",
    "What\'s a version of a lazy Sunday with me that you keep returning to in your mind?",
    "If we could have a magical shortcut to being in the same room, when would you use it most?",
    "What\'s a dream version of our first home together?",
    "If we could visit any market in any country together, where would we go?",
    "What\'s a bedtime story you\'d want us to tell each other?",
    "If our love were a building, what would it look like from the outside?",
    "What\'s the most beautiful sentence you could write about us?",
    "If we could wake up anywhere in the world together tomorrow, where would it be?",
    "What\'s a magical version of a perfectly ordinary moment with me?",
    "If love had a sound, what would ours be?",
    "What\'s an act of love you\'d want to experience once that you\'ve only ever imagined?",
    "If we could visit one natural wonder together, which one and what would we say?",
    "What\'s a window view you\'d want to share with me?",
    "If we had a garden together, what would we grow?",
    "What\'s an evening you\'ve imagined us spending that starts simply but ends beautifully?",
    "If our love story were a film with no dialogue, just images, what would we see?",
    "What\'s a scent that makes you feel like we\'re somehow closer?",
    "If we could share one perfectly still moment, what would the setting be?",
    "What\'s a dream version of the life we\'ll have when the distance is gone?",
    "If we had a treehouse, what would we keep in it?",
    "What\'s a walk you\'d want to take with me that hasn\'t happened yet?",
    "If time moved differently for us, what would you want more of?",
    "What\'s a place in your city you\'d want to show me first?",
    "If we could make a documentary about one day in our future life, what day?",
    "What\'s a library you\'d want us to spend a rainy afternoon in together?",
    "If we could co-author a piece of music, what would the mood be?",
    "What\'s an adventure that\'s too small for a bucket list but too big to forget?",
    "If we had a journal we passed back and forth, what would you write on the first page?",
    "What\'s a word that sounds exactly like how being with you feels?",
    "If we had a ritual for every full moon, what would it be?",
    "What\'s an imaginary road trip we\'d take with no map?",
    "If we could live in a novel together, which one?",
    "What\'s a small beautiful thing you want to show me the moment I arrive?",
    "If our love had a season all its own, what would it bring?",
    "What\'s a sentence from a book that you feel describes us somehow?",
    "If we had a rooftop and a clear night, what would we talk about?",
    "What\'s an imaginary café where we\'d be regulars?",
    "If I sent you a letter that took a month to arrive, what would you want it to say?",
    "What\'s a version of us in nature that feels the most right?",
    "If we had one hour together with no screens or distractions, what would we do?",
    "What\'s a way the world has looked beautiful recently that made you miss me?",
    "If we could dance together somewhere, where would the setting be?",
    "What\'s a dream that left you wanting to tell me about it immediately?",
    "If love were an architecture style, what would ours be?",
    "What\'s the most romantic version of a Tuesday you can imagine with me?",
    "If we had a window seat on a train going anywhere, what would we talk about?",
    "What\'s a dream for us that doesn\'t need to be big, just steady?",
    "If we could explore any museum at night, which one?",
    "What\'s a picture I haven\'t seen of you that I\'d love to find someday?",
    "If we could share one dream while we slept, what would you choose?",
    "What\'s a version of the future where we\'re both exactly where we want to be?",
    "If we could float above a city together and choose where to land, where?",
    "What\'s a dreamy evening where everything about it is just perfectly us?",
    "If you could plan one perfect surprise for me, what would it involve?",
    "What\'s a small moment you imagine us sharing that would feel like everything?",
    "If the distance between us became a road we could drive, what would we see?",
    "What\'s something you\'ve imagined saying to me in person that words don\'t fully capture?",
    "If we could live a month in another country just the two of us, where?",
    "What\'s a version of our morning together that feels like poetry?",
    "If love grew like a garden, what would ours look like right now?",
    "What\'s a wish you hold for both of us that you\'ve kept private?",
    "If we had a cabin in the woods for a whole winter, what would we do?",
    "What\'s a quiet thought you have about us when everything else is loud?",
    "If we could watch the sunrise together every morning for a year, where would we be?",
    "What\'s a simple joy you imagine us sharing that makes everything feel worth it?",
    "If we had a library of every book we\'d read together, what\'s on the first shelf?",
    "What\'s a dream that ends with us both laughing?",
    "If love were a season, what does ours feel like right now?",
    "What\'s a version of us in thirty years that makes you smile?",
    "If we could hold one feeling between us like an object, what would it be?",
    "What\'s an ordinary moment you\'ve imagined with me that secretly means everything?",
    "If we had one perfect day to do nothing, what would it look like?",
    "What\'s the most tender version of a goodbye you\'ve imagined us never having to say?",
    "If we could create a new word for how we feel about each other, what would it be?",
    "What\'s a small dreamy plan you have for us that you haven\'t shared yet?",
    "If we could watch a storm together from somewhere safe, where would we be?",
    "What\'s a version of being home that only exists when I\'m with you?",
    "If we could make a time capsule of this exact moment, what would you put in it?",
    "What\'s a quiet, perfect thing you\'d want us to do on the first night we\'re together again?",
    "If the feeling of loving you were a place, where would it be?",
    "What\'s a dream of ours that you believe in even on the hard days?",
    "If we could paint one room together in our favourite colour, which room and what colour?",
    "What\'s an imaginary world where the distance never existed?",
    "If we had one evening to recreate a scene from our favourite story, which one?",
    "What\'s a dream so quiet and gentle that you\'ve been afraid to say it out loud?",
    "If we could live inside the feeling of a perfect song for one day, which song?",
    "What\'s a dream for us that asks nothing of the world, only of us?",
    "If we had a window that showed us anywhere we wanted, what would you look at tonight?",
    "What\'s the most beautiful imagined memory of us that you carry with you?",
    "If we could slow time down during one moment between us, which would you choose?",
    "What\'s a simple future you dream of that has nothing extraordinary in it, just us?",
    "If love had a texture that changed with seasons, what would ours feel like today?",
    "What\'s a letter you\'d write to the version of me you haven\'t met yet?",
    "If we could spend a whole day doing only things we both love, what would it look like?",
    "What\'s an ordinary moment you\'ve daydreamed about that secretly holds everything?",
    "If we could mark our favourite spot anywhere in the world, where would it be?",
    "What\'s a dream for us that gets more beautiful the more time passes?",
    "If our love were the opening scene of a film, what would we see?",
    "What\'s a colour that holds the exact feeling of missing you?",
    "If we could leave something behind for whoever comes after us to find, what would it be?",
    "What\'s the quietest, most beautiful version of happiness you can imagine with me?",
    "If our love were a piece of music no one had ever written, what would it sound like?",
    "What\'s a small daily ritual you dream of having with me that keeps the world gentle?",
    "If we could look at each other across any moment in history, which would you choose?",
    "What\'s the most tender version of a good morning you\'ve imagined hearing from me?",
    "If we could plant something together that would grow long after us, what would it be?",
    "What\'s a dream for us that becomes more real the more you believe in it?",
    "If we could hold hands and walk through any city in the rain, which one?",
    "What\'s a small extraordinary thing you want us to do the moment we are together again?",
    "If our love story ended happily and beautifully, what\'s the last line?",
    "What\'s a version of peace that only exists when I\'m with you?",
    "If we could live in a lighthouse for a month, what would our days look like?",
    "What\'s a magical version of a bus ride or commute we\'d have together?",
    "If we could spend a week in a town where it always rains gently, where would it be?",
    "What\'s a beautiful thing you\'ve noticed in the world that you want to show me someday?",
    "If we could write one message in the sky, what would it say?",
    "What\'s a version of a slow morning with me that you return to in your mind?",
    "If we could visit any village in any country together for one week, where would we go?",
    "What\'s a song you\'d want to hear the first time we\'re in the same place again?",
    "If we could live in the pages of a storybook, which one would you choose?",
    "What\'s an imaginary walk we\'d take that begins somewhere beautiful and ends somewhere more so?",
    "If we could freeze one weather moment between us, what would it be?",
    "What\'s a quiet dream you have for us that involves absolutely nothing grand?",
    "If we had a weekend with nowhere to be, what does the most perfect version look like?",
    "What\'s a flower market or book fair or night bazaar you\'d want to wander through with me?",
    "If we could float in a hot air balloon over one landscape, which one?",
    "What\'s a romantic version of doing nothing that you\'d want with me?",
    "If we could rent a small apartment in a foreign city for a month with no agenda, where?",
    "What\'s a dream of us that involves a table, good food, and candles?",
    "If we could have a picnic in any historical moment in time, when and where?",
    "What\'s a type of rain or light or sky that makes you feel like I\'m nearby?",
    "If we could build a tiny home somewhere remote and quiet, what would be in it?",
    "What\'s the most tender imagined goodbye between us that ends in a promise?",
    "If we could borrow a page from any love story in history, which would it be?",
    "What\'s a dream about us where nothing remarkable happens and it\'s still perfect?",
    "If we could visit one hidden waterfall or beach or valley, where would it be?",
    "What\'s a morning ritual you\'d want us to have when we finally share the same morning?",
    "If we could recreate one scene from a painting together, which one would you choose?",
    "What\'s an imagined afternoon where everything is slow and we\'re both at ease?",
    "If we could spend a full day in complete silence together, how would we fill it?",
    "What\'s a version of cooking dinner together that you\'ve imagined down to every detail?",
    "If we could fall asleep under the stars somewhere in the world, where would it be?",
    "What\'s a memory from nature that you want to experience with me for the first time?",
    "If we could read the same book at the same time across the distance, which one?",
    "What\'s a dreamy version of grocery shopping together that somehow feels romantic?",
    "If we could spend one whole day watching films in bed, what\'s our list?",
    "What\'s a quiet corner of a museum you\'d want to sit in with me for an hour?",
    "If we could have a candlelit dinner in any ancient building, which one?",
    "What\'s a version of walking hand in hand that you\'ve imagined so clearly you can feel it?",
    "If we could choose one piece of art to hang in our home someday, what would it be?",
    "What\'s a dream that begins with arriving somewhere and ends with us completely at peace?",
    "If we could take a train across any country together, which route would we choose?",
    "What\'s a festival or celebration in the world you\'d want to experience with me?",
    "If we could lie in a meadow or on a rooftop and just talk for hours, where would it be?",
    "What\'s a quiet dream of us that involves tea or coffee and a window somewhere beautiful?",
    "If we could teleport to one place right now just for ten minutes, where would you take me?",
    "What\'s a sunrise or sunset you\'ve seen that you desperately wish I\'d been there for?",
    "If we could hear one orchestra or singer perform live together, who would it be?",
    "What\'s a dream version of our reunion that is simple but feels like the whole world?",
    "If we could spend one weekend in a city we\'ve never been to, where and what do we do?",
    "What\'s a dreamy scene of us that starts with a knock at the door?",
    "If we could have a slow dance somewhere unexpected, where would it be?",
    "What\'s a version of holding hands while walking somewhere that you\'ve imagined clearly?",
    "If we could follow any river in any country together for a week, which one?",
    "What\'s a quiet, dreamy version of us that doesn\'t need to be anywhere specific?",
    "If we could share one first experience together we\'ve both never had, what would it be?",
    "What\'s an imagined evening where we forget the time because we\'re too absorbed in each other?",
    "If we could fall in love again for the first time somewhere beautiful, where would it be?",
    "What\'s a dream about us where I show up unexpectedly and everything is exactly right?",
    "If we could watch a meteor shower together from one perfect place, where would it be?",
    "What\'s a dreamy version of learning something new together, like a skill or language?",
    "If we could spend a whole day exploring a flea market or antique fair together, where?",
    "What\'s a soft and quiet and beautiful dream about us that you\'ve never shared with anyone?",
    "If we could have breakfast in bed somewhere with a view, where would we be?",
    "What\'s a version of doing laundry or washing dishes together that somehow feels like joy?",
    "If we could visit one place that inspired a piece of art or music we both love, where?",
    "What\'s a dreamy image of us in winter, with something warm between our hands?",
    "If we could live out one fairy tale for a single day, which one and what part?",
    "What\'s a version of us in summer that makes everything feel easy and golden?",
    "If we could have our own quiet corner of the world that no one else knows about, where?",
    "What\'s a dream where the world is beautiful and we are both in it together?",
    "If we could walk through any forest or jungle together, which one and at what time of day?",
    "What\'s an imagined night where we both fall asleep happy and close?",
    "If we could visit any ancient temple or ruin together at dawn, which would it be?",
    "What\'s a slow, dreamy version of a Saturday that we could return to whenever we needed?",
    "If we could live like locals in any village for a month, where in the world would it be?",
    "What\'s the most beautiful version of an ordinary evening you\'ve imagined with me?",
    "If we could write a love letter in a language neither of us speaks, what would the feeling be?",
    "What\'s a dreamy moment of ours that doesn\'t need music or scenery — just us?",
    "If we could watch the sky change colour together every evening for a year, where would we sit?",
    "What\'s a version of arriving somewhere new with you that you\'ve imagined in detail?",
    "If we could have our own little ritual every time we\'re reunited, what would it look like?",
    "What\'s a dreamy scene of us that is soft and warm and asks nothing of the world?",
    "If we could have the most beautifully ordinary day together, what would be in it?",
    "What\'s a tender and dreamy version of falling asleep next to you that I carry with me?",
    "If we could visit one island in any ocean in the world, which one and what would we do?",
    "What\'s a dream of ours that exists only in the space between what is and what will be?",
    "If we could have one meal cooked for us by anyone in any setting, what would it be?",
    "What\'s a quiet, beautiful wish you hold for us that you\'ve kept in your heart until now?",
    "If we could make one memory tonight even across the distance, what would it be?",
    "What\'s a dreamy ritual we\'d share every single evening if the world allowed it?",
    "If we could sit by a fire somewhere in the world and say everything, where would it be?",
    "What\'s a version of being home together that is the most beautiful version of home you know?",
    "If we could have one perfect and completely ordinary Thursday together, what would happen?",
    "What\'s the most quietly beautiful dream of us that you\'ve been holding for a long time?",
    "If we could live out the feeling of the best day we\'ve ever shared again, what day would it be?",
    "What\'s a dreamy, tender, quietly hopeful version of our future that you believe in completely?",
    "If we could look at each other right now across the distance and say one thing, what would it be?",
    "What\'s a dream of us that feels both simple and like everything at the same time?",
    "If the world went quiet for one hour and it was just us, what would we do with it?",
    "What\'s a version of being together that asks nothing of either of us but presence?",
    "If we could end every day with one small ritual just for us, what would it be?",
    "What\'s the softest, most beautiful, most quietly dreamed version of the life we are building?",
    "If we could live inside the feeling of loving and being loved by you for one whole day, what would that feel like?",
    "What\'s a dream of ours that is simply this: we are together and everything is okay?",
    "If we could wake up to the same morning somewhere beautiful just once before the distance ends, where would it be and what would we say?",
    "If we could live inside a snow globe version of a city for one day, which city?",
    "What\'s a version of being together that feels like the word \'finally\'?",
    "If we could bottle one feeling and open it on our hardest day apart, what would it be?",
    "What\'s a quiet imagined morning with me that you return to without realising?",
    "If we could share one view of the world from any height, what would we be looking at?",
    "What\'s an imagined reunion that starts with something small and becomes everything?",
    "What\'s a dreamy version of just being in the same room as each other with no agenda?",
    "If we could live somewhere that was always the golden hour, where would it be?",
    "What\'s a version of us that exists only in the space between who we are and who we\'re becoming?",
    "If we could plant a tree somewhere that would outlast us, where would it be?",
    "What\'s the softest, most peaceful version of being in love that you carry with you?",
    "If we could trace the outline of a perfect day together, what does it look like?",
    "What\'s a dreamy, quiet, ordinary moment with me that would feel like everything?",
    "If we could disappear into one perfect evening together, what does it smell like?",
    "What\'s an imagined moment between us where time slows completely?",
    "If we could write one line on the inside cover of every book we\'ll ever read together, what would it say?",
    "What\'s a slow, dreamy, beautiful version of simply being with you that I could live in?",
    "If we could choose one moment to return to together without changing anything, what would it be?",
    "What\'s a dream of ours that is simply this — we are here, we are together, and everything is warm?",
    "If love had a home address, what would ours be?",
    "What\'s a version of our life together that begins with you opening a door and me being on the other side?",
    "If we could take one perfectly slow walk somewhere in the world, where would we go?",
    "What\'s the most beautiful and tender version of ordinary that you\'ve imagined for us?",
    "If our love had a season that was entirely its own, what would it feel like and what would it bring?",
    "What\'s a dream so soft and so ours that you\'ve only ever kept it to yourself until now?",
    "If the distance between us right now became a path you could walk, what would you find along the way?",
    "What\'s the version of being reunited that you return to when the waiting feels too long?",
    "If we could live slowly and together somewhere for just one month with nothing urgent, where would it be?",
    "What\'s the quietest and most beautiful dream you carry of us that asks nothing of the world?",
    "If we could design our own corner of the universe together, what would be in it?",
    "What\'s the dream of us that you hold onto on the hardest nights?",
    "If we could be in one perfect moment together right now, what does it look like?",
    "What\'s a dreamy, tender, slow, ordinary version of our life that makes you smile even in the imagining?",
    "If love were a light, where would ours shine and on what?",
    "What\'s the softest version of tomorrow that you can imagine for us?",
    "If we could write down one dream we share and seal it until we\'re together, what would it say?",
    "What\'s a quiet, beautiful, deeply dreamed version of the life we\'re still building together?",
    "If we could exist in one perfect, unhurried moment together right now, what would it be?",
    "What\'s the most tenderly imagined version of finally being in the same place that you carry with you?",
    "If we could turn this exact moment of loving each other from far away into something we could hold, what would it be?",
    "What\'s the most beautiful dream you have for us that begins simply with — we are home?",
    "If we could stand somewhere together and see everything we\'ve been building toward, where would that place be?",
    "What\'s the version of our future that visits you most on the nights the distance feels the longest?",
    "If we could collapse the distance right now for just one hour, what would you want that hour to hold?",
    "What\'s the quietest, most truthful, most beautiful dream of us that you have never said out loud?",
    "If love between us were a place that always existed, what would it feel like to arrive there?",
    "What\'s a version of being together that is simply, perfectly, wholly enough?",
    "If you could whisper one thing across the distance right now and know I\'d hear it, what would it be?",
    "What\'s a dream of us that is so tender you\'ve been saving it for exactly the right moment, and maybe this is it?",
    "If the feeling of loving you from here could become a sound, what would it be?",
    "What\'s the most quietly hopeful dream of ours that you believe in even on the hardest days?",
    "If we could have one single perfect ordinary day together, what time does it start and where does it end?",
    "What\'s a dream of us so full of warmth and closeness and love that even imagining it makes the distance smaller?",
    "If we could write our love story in one sentence and leave it somewhere permanent, what would it say?",
    "What\'s the most beautiful version of us that you have imagined and believed in and held onto, always?",
    "If we could be in the same room right now and say nothing, just be, what would that feel like?",
    "What\'s the single most dreamed, most quietly hoped for, most tenderly imagined moment between us that has not happened yet?",
    "If we could hold the feeling of this love — right now, exactly as it is — what would it weigh and what would it look like?",
    "What\'s the most beautiful and honest and hopeful dream you have for us that you are ready to say out loud?",
    "If this love between us could speak for itself, what would it say it has been waiting to tell us?",
    "What\'s the version of the future you believe in most, the one where we are together and it was worth every single day of this?",
    "If you could give me one dreamed gift that exists only in your imagination but would mean everything to me, what would it be?",
    "What\'s a dream of us that begins the moment the distance closes and never really ends?",
    "If love were the only language and we were fluent, what\'s the first thing you would say?",
    "What\'s the softest, warmest, most quietly beautiful dream of us that you carry into every new day?",
    "If we could create one memory right now that didn\'t need us to be in the same place, what would we make?",
    "What\'s a dream so yours and mine and ours that no one else in the world could have dreamed it?",
    "If we could name this love something that belonged only to it, what would we call it?",
    "What\'s the most quietly radiant dream you hold for the day we are finally on the same side of the world?",
    "If the waiting we\'ve done could become something we kept, what would you want to call it?",
    "What\'s the single most beautiful and hopeful and quietly certain thing you dream about when you dream about us?",
    "If we could hold hands across the distance for just a moment, what would you want that moment to mean?",
    "What\'s the version of us that you believe in so completely that even the hardest days can\'t shake it?",
    "If we could live inside the truest and most beautiful feeling of this love for one whole day, what would that day look like?",
    "What is the dream of us that you would never trade for anything, the one that makes all of this worth it?",
    "If we could name the colour of the feeling between us, what would we call it?"
  ],
  "💕 Romantic": [
    "What\'s a small thing I do that makes you fall for me all over again?",
    "Which moment from us do you replay in your head most often?",
    "What does it feel like right before I say I love you?",
    "What\'s something about me that you find beautiful that I probably don\'t see?",
    "What\'s a look I give you that you can\'t get out of your head?",
    "When do you feel closest to me, even across the distance?",
    "What\'s the most romantic thing I\'ve ever done, even without trying?",
    "What does missing me feel like to you, physically?",
    "What\'s one thing about us that you\'d never want to change?",
    "What does it feel like to hear my voice after a long day?",
    "What\'s a touch from me you think about when we\'re apart?",
    "What\'s the moment you felt most loved by me?",
    "What do you love about who I am when no one\'s watching?",
    "What\'s something about loving me that surprised you?",
    "What\'s a word that comes to mind when you think of how I make you feel?",
    "What\'s a love language I speak that you didn\'t expect to need?",
    "What\'s the thing about you that you think I love most?",
    "What does \'I miss you\' really mean when you say it to me?",
    "What\'s a quiet moment between us that felt deeply intimate?",
    "When do you feel most seen by me?",
    "What\'s something I\'ve said that you\'ve kept with you?",
    "What does falling asleep feel like knowing I\'m thinking of you?",
    "What\'s one imperfect thing about me that you love anyway?",
    "What was the moment you stopped wondering if this was real?",
    "What does loving someone long-distance teach you about love itself?",
    "What\'s something about my voice or laugh that stays with you?",
    "What do you love about the way we fight and make up?",
    "What\'s the most romantic version of our reunion you\'ve imagined?",
    "What\'s something I do that makes you feel completely chosen?",
    "What\'s a way I show love that you hope never changes?",
    "What does it feel like when I tell you I\'m proud of you?",
    "What\'s a moment when you looked at me and thought yes, this one?",
    "What does being with me feel like that\'s different from anyone before?",
    "What\'s the most tender thing you\'ve ever wanted to say to me?",
    "What does it feel like when our conversation flows without any effort?",
    "What\'s something about the way I care for you that you never expected?",
    "What does the thought of a future with me do to your chest?",
    "What\'s a detail about me that you notice that most people wouldn\'t?",
    "What does it feel like when I understand you before you finish explaining?",
    "What\'s a moment you realised I was thinking about your happiness?",
    "What does it feel like to be known by me?",
    "What\'s a way I make you feel safe that you\'ve never told me?",
    "What does hearing my name said by you feel like to you?",
    "What\'s the most beautiful text I\'ve ever sent you?",
    "What does it feel like to imagine introducing me to people as yours?",
    "What\'s a moment when you\'ve caught yourself smiling just thinking of me?",
    "What does my love feel like when it arrives in unexpected ways?",
    "What\'s something about the way we talk that feels unlike anything else?",
    "What does it feel like to know I want the best for you?",
    "What\'s the most romantic ordinary thing we\'ve ever done?",
    "What does it feel like to trust me with your most vulnerable parts?",
    "What\'s a thing you do differently because you\'re loved by me?",
    "What does desire feel like for you when we haven\'t spoken all day?",
    "What\'s a promise you made to yourself about how you\'d love me?",
    "What does it feel like when I laugh at something only you would say?",
    "What\'s a way I\'ve loved you that you didn\'t know you needed?",
    "What does it feel like when I reach out first?",
    "What\'s a thing you do that\'s completely unconsciously because of how I make you feel?",
    "What does patience in love feel like to you when it\'s real?",
    "What\'s a small kindness of mine that landed deeper than you expected?",
    "What does it feel like to be the person I think about most?",
    "What\'s a moment you wanted to freeze between us?",
    "What does being in love feel like when it\'s steady and not dramatic?",
    "What\'s something about me that you\'d describe as a privilege to know?",
    "What does it feel like when I\'m completely focused on you?",
    "What\'s a romantic thing you\'ve wanted to do for me that you\'ve kept to yourself?",
    "What does loving me give back to you?",
    "What\'s a thing you\'ve learned to love about yourself through being loved by me?",
    "What does it feel like when I say your name in a way that\'s just for you?",
    "What\'s a moment when you thought I\'m so glad I chose this?",
    "What does longing feel like to you when it\'s connected to love not just distance?",
    "What\'s a way I\'ve shown up for you that meant more than words can capture?",
    "What does it feel like to be someone\'s most important person?",
    "What\'s something you love about how I express affection?",
    "What does it feel like when I choose honesty with you even when it\'s hard?",
    "What\'s a romantic gesture of mine that was small but unforgettable?",
    "What does being desired feel like when it\'s sincere and deep?",
    "What\'s something about the way we love that you\'d want to bottle up forever?",
    "What does it feel like to know I see your flaws and stay?",
    "What\'s a moment when love felt like the most logical thing in the world?",
    "What does tenderness from me feel like when you need it most?",
    "What\'s a thing about my love that you\'ll still remember when we\'re old?",
    "What does it feel like to be cared for in exactly the way you needed?",
    "What\'s a small romantic habit of mine you\'d want to keep forever?",
    "What does it feel like when I choose you in front of other people?",
    "What\'s something about the way we say goodbye that makes you ache a little?",
    "What does it feel like knowing someone is rooting for you completely?",
    "What\'s a thing I\'ve said in passing that you\'ve held onto for longer than I know?",
    "What does it feel like when I\'m fully in your corner?",
    "What\'s a way of being loved by me that changed what you thought love could feel like?",
    "What does it feel like when we are in our own little world?",
    "What\'s a romantic wish you have for us that you\'ve kept private?",
    "What does choosing me every day feel like from where you stand?",
    "What\'s something about the way you love me that you\'re quietly proud of?",
    "What does love feel like when it\'s also your deepest friendship?",
    "What\'s a way I\'ve surprised you with the depth of how I feel?",
    "What does it feel like when you imagine telling someone about me for the first time?",
    "What\'s a thing I do that makes you feel like the only person in the room?",
    "What does it feel like when I hold space for you without trying to fix anything?",
    "What\'s a moment when everything between us felt absolutely certain?",
    "What does a love that feels like home feel like to you in practice?",
    "What\'s something about the way we\'ve navigated distance that you\'re proud of?",
    "What does it feel like when I say exactly what you needed to hear?",
    "What\'s a way I love you that you hope you\'re giving back to me too?",
    "What does it feel like when I tell you something I\'ve never told anyone?",
    "What\'s a romantic version of an ordinary moment with me that you\'ve imagined?",
    "What does it feel like to be deeply wanted by someone?",
    "What\'s a thing about how I text you that you\'ve secretly loved?",
    "What does it feel like when we both laugh at the exact same moment?",
    "What\'s a way you\'ve seen me grow that\'s made you love me more?",
    "What does it feel like when I ask how you really are and actually wait for the answer?",
    "What\'s something about loving me that has made loving yourself easier?",
    "What does it feel like to be someone\'s first thought in the morning?",
    "What\'s a small way I\'ve shown you that you matter that you haven\'t forgotten?",
    "What does it feel like when I\'m completely honest with you?",
    "What\'s a way we\'ve built something together without realising it?",
    "What does it feel like when love stops being something you have to earn?",
    "What\'s a romantic thing about us that even you find surprising?",
    "What does it feel like to know that I miss you just as much?",
    "What\'s something about the way we exist together that feels unlike anything else?",
    "What does it feel like to have someone who believes in you the way I do?",
    "What\'s a moment of tenderness between us that no one else witnessed?",
    "What does it feel like when love is also gentleness and not just passion?",
    "What\'s a small romantic act you do for me without saying a word?",
    "What does it feel like to love someone who loves you back without condition?",
    "What\'s a thing I do that makes you feel like you\'re home?",
    "What does it feel like when our timing is perfectly aligned?",
    "What\'s something about the way I love you that you want more of?",
    "What does it feel like when love is quiet and certain and doesn\'t shout?",
    "What\'s a romantic thought you\'ve had about me today?",
    "What does it feel like to be with someone who sees the best in you?",
    "What\'s a way being loved by me has changed you?",
    "What does it feel like when I choose you even when it would\'ve been easier not to?",
    "What\'s something about how you feel about me that words haven\'t fully captured yet?",
    "What does it feel like when love is effortless and not something you maintain?",
    "What\'s the most romantic version of something ordinary we\'ve shared?",
    "What does it feel like to have someone in your corner for every version of yourself?",
    "What\'s a moment when I looked at you in a way you\'ll never forget?",
    "What does it feel like to love someone who is also growing?",
    "What\'s a romantic promise you\'ve made to yourself about how you\'ll show up for me?",
    "What does it feel like when I love the parts of you that you\'re still working on?",
    "What\'s something about being with me that feels like an answered question?",
    "What does it feel like when I say I love you and mean it in a way you feel?",
    "What\'s a moment our love felt like a gift rather than an effort?",
    "What does it feel like to be someone I run to?",
    "What\'s a romantic thing about us that you want our future kids to hear about someday?",
    "What does it feel like when being together feels like the most obvious thing?",
    "What\'s something about the way I love you that you hope stays forever?",
    "What does it feel like when I make you feel like you\'re extraordinary?",
    "What\'s a romantic thing you\'ve imagined saying to me that you haven\'t yet?",
    "What does it feel like to love someone who chooses you every single day?",
    "What\'s a thing about the way we say I love you that only we would understand?",
    "What does it feel like to imagine growing old with someone who still makes you smile?",
    "What\'s the most beautiful thing about what we have right now, exactly as it is?",
    "What does it feel like when love is also patience and not just warmth?",
    "What\'s something I\'ve loved about you from the very beginning that I still love now?",
    "What does it feel like when I reach out exactly when you need me to?",
    "What\'s a moment you realised you were in love with me without any doubt?",
    "What does it feel like to be deeply and truly chosen?",
    "What\'s a romantic thing about the way we communicate that you hope we never lose?",
    "What does it feel like when love is also the most comfortable thing you\'ve ever worn?",
    "What\'s something about how I love that has shown you what love can actually be?",
    "What does it feel like to be with someone who makes the ordinary feel meaningful?",
    "What\'s a moment when I made you feel completely and utterly loved?",
    "What does it feel like to know that whatever happens, we have each other?",
    "What\'s a small romantic detail about us that would take a stranger\'s breath away?",
    "What does it feel like when loving you feels like the easiest thing I\'ve ever done?",
    "What\'s a way I\'ve shown you that you\'re worth the distance and the wait?",
    "What does it feel like when someone loves you in the exact right way?",
    "What\'s the most romantic truth you\'ve discovered about us?",
    "What does it feel like to be loved the way that I love you?",
    "What\'s a thing about loving me that makes you love yourself more?",
    "What does it feel like when we are in the middle of something so ordinary and yet it feels like everything?",
    "What\'s a moment of ours that you think of when you need to remember that love is real?",
    "What does it feel like to know that I am yours and you are mine?",
    "What\'s the most romantic moment we haven\'t had yet that you\'re looking forward to?",
    "What does it feel like when love makes you feel like the truest version of yourself?",
    "What\'s something about how we love each other that you believe is rare?",
    "What does it feel like when everything else fades and it\'s just you and me?",
    "What\'s a romantic thing you want to say to me that you\'ve been saving for the right moment?",
    "What does it feel like to be in love with your best friend?",
    "What does it feel like to know that I think of you the moment I wake up?",
    "What\'s a moment recently where something reminded you of me?",
    "What does it feel like when we talk and the world outside stops mattering?",
    "What\'s something you\'d want me to know about how much you love me that words don\'t cover?",
    "What does it feel like when I say your name the way only I say it?",
    "What\'s a way I\'ve made you feel beautiful without trying?",
    "What does it feel like when the distance shrinks in a single honest moment?",
    "What\'s a romantic thing about us that only we would notice?",
    "What does it feel like to be in love with someone you also trust completely?",
    "What\'s a way I\'ve surprised you with how deeply I feel for you?",
    "What does it feel like when I\'m the first person you want to tell something to?",
    "What\'s a moment of connection we\'ve had that felt almost too tender to name?",
    "What does it feel like to be someone\'s constant even across all this distance?",
    "What\'s a quiet, romantic moment between us that you\'d replay forever?",
    "What does it feel like when I listen to you in the way that makes you feel completely held?",
    "What\'s a way I\'ve shown you love that went beyond what you expected?",
    "What does it feel like when our silences feel just as close as our conversations?",
    "What\'s a romantic truth about us that you want to hold onto forever?",
    "What does it feel like when I reach out just because I was thinking of you?",
    "What\'s something about the way you love me that you\'re quietly proud of?",
    "What does it feel like to be held in someone\'s heart from the other side of the world?",
    "What\'s a way I\'ve loved you that felt like exactly what you needed?",
    "What does it feel like to be someone\'s reason to keep going on a hard day?",
    "What\'s a small gesture of mine that meant more than a grand one ever could?",
    "What does it feel like when my love shows up in unexpected ways?",
    "What\'s a romantic version of an ordinary phone call we\'ve had?",
    "What does it feel like to be cared for in a way that feels completely specific to you?",
    "What\'s a way loving me has surprised you in the best possible sense?",
    "What does it feel like to be chosen again every single day from far away?",
    "What\'s something about how I express love that feels completely yours?",
    "What does it feel like to know you are my person without any uncertainty?",
    "What\'s a moment I made you feel like the most important person in the world?",
    "What does it feel like when love is also your greatest comfort?",
    "What\'s a romantic memory of ours that you return to on ordinary days?",
    "What does it feel like when I\'m proud of you for something small?",
    "What\'s a way I\'ve loved you that you\'d want to always remember?",
    "What does it feel like when someone\'s love makes you want to love them back harder?",
    "What\'s a moment where loving you felt like the easiest and truest thing in my world?",
    "What does it feel like to know that my heart is always with you?",
    "What\'s a way I\'ve made you feel seen in a moment when you needed it most?",
    "What does it feel like to be loved across every time zone?",
    "What\'s a small romantic thing we do that I don\'t think either of us has named yet?",
    "What does it feel like when you hear something beautiful and think of me first?",
    "What\'s a version of love that you didn\'t know you wanted until I showed you?",
    "What does it feel like to know that I\'d choose you again in every version of my life?",
    "What\'s a way being loved by me has made the world feel smaller and safer?",
    "What does it feel like when our love feels like a quiet certainty rather than a question?",
    "What\'s a romantic thing you\'ve felt for me that you\'ve kept to yourself until now?",
    "What does it feel like when I make you laugh in the middle of something serious?",
    "What\'s a moment when you thought this love is unlike anything I\'ve ever felt?",
    "What does it feel like to know I\'m still choosing you even on the days I\'m far away?",
    "What\'s a way I\'ve cared for you that felt like someone finally understanding you?",
    "What does it feel like when love is also safety?",
    "What\'s the most beautifully honest thing you could say to me right now about how you feel?",
    "What does it feel like to be in love with someone who sees your light even in your darkness?",
    "What\'s a romantic thing about how we communicate that I hope we never stop doing?",
    "What does it feel like when love asks nothing of you but to receive it?",
    "What\'s a tender moment between us that you\'d want written down somewhere?",
    "What does it feel like to be deeply wanted by the right person?",
    "What\'s a way our love has surprised both of us?",
    "What does it feel like when even the waiting feels meaningful because it leads to you?",
    "What\'s something about loving you that has made me more myself?",
    "What does it feel like to have someone who loves your mess and your magnificence equally?",
    "What\'s a romantic thing about the space between us that you\'ve found beautiful despite everything?",
    "What does it feel like to know that wherever I am, I am always a little bit yours?",
    "What\'s the most romantic thing about the way this love has changed you?",
    "What does it feel like to know that this is the love you want to grow old inside?",
    "What\'s a way I\'ve loved you without knowing I was doing it?",
    "What does it feel like when someone chooses to stay up late just to hear your voice?",
    "What\'s a moment where my love felt like coming home?",
    "What does it feel like to love someone who makes you want to be your best self?",
    "What\'s a quiet romantic truth about what we have that you want to protect most?",
    "What does it feel like to know that every version of me is in love with every version of you?",
    "What\'s a thing about the way we love that you believe is built to last?",
    "What does it feel like when love is also your most peaceful place?",
    "What\'s a romantic version of tomorrow together that you\'d want to live in?",
    "What does it feel like to be someone\'s most chosen thing?",
    "What\'s a way I\'ve made you feel completely held without physically being there?",
    "What does it feel like to love and be loved back in exactly the right way?",
    "What\'s a moment where you thought I am so glad this person is mine?",
    "What does it feel like to carry someone you love in your chest all day long?",
    "What\'s a romantic thing about the timing of us that you find beautiful?",
    "What does it feel like to love someone who loves you back with everything they have?",
    "What\'s a way I\'ve shown up for you romantically that meant more than the gesture itself?",
    "What does it feel like when even a single message from me changes the texture of your day?",
    "What\'s the most beautiful romantic truth about what we are to each other?",
    "What does it feel like to know that across every distance and every day, this is still love?",
    "What\'s a moment between us that you want to keep with you for the rest of your life?",
    "What does it feel like to be deeply, certainly, quietly, joyfully in love?",
    "What\'s something I could say to you right now that would say everything?",
    "What does it feel like to know that the person you love loves you just as much?",
    "What\'s the most romantic thing you\'ve ever felt that you haven\'t found the words for until now?",
    "What does it feel like to love someone across time and distance and still feel completely close?",
    "What\'s a truth about how I love you that you want to hold on to on the hardest days?",
    "What does it feel like to know that this love is the one you\'ll always be grateful for?",
    "What\'s something about us that makes love feel like the most obvious thing in the world?",
    "What does it feel like to be in love with someone who is also your home?",
    "What does it feel like when I love you across every hard day and you feel it even here?",
    "What\'s something about the way I choose you that you want to keep believing in?",
    "What does it feel like to be loved the way you always hoped someone would love you?",
    "What\'s the most quietly romantic truth about us that you\'d want tattooed on your heart?",
    "What does it feel like to know that every part of me — the certain and the still figuring it out — is entirely yours?",
    "What\'s the most honest thing you could say right now about how completely and truly you love me?",
    "What does it feel like to be someone\'s whole heart from the other side of the world?",
    "What\'s a way I\'ve loved you that changed what you thought love could be?",
    "What does it feel like to know that we are, in every quiet and extraordinary way, each other\'s?",
    "What\'s the most beautiful romantic truth about us that you\'ve been saving to say at exactly the right moment?",
    "What does it feel like to love someone so much that missing them feels almost like its own kind of closeness?",
    "What\'s a version of being in love that you never knew existed until you loved me?",
    "What does it feel like when the distance cannot change the fact that you are mine and I am yours?",
    "What\'s the most tender and honest and completely true thing you feel about loving me right now?",
    "What does it feel like to be someone who is loved the way I love you?",
    "What\'s a romantic truth about this love that you want us to always remember no matter how much time passes?",
    "What does it feel like to love someone who loves you back with everything they are across every mile?",
    "What\'s the most beautifully simple romantic thing about us that you never want to take for granted?",
    "What does it feel like to know that even far away, you are the most loved person in my world?",
    "What\'s the truest and most romantic and most quietly certain thing you know about what we are to each other?",
    "What does it feel like to be deeply, completely, certainly, and joyfully in love with exactly the right person?",
    "What\'s a romantic thing you want me to know about you right now that you haven\'t said yet?",
    "What does it feel like when loving you is the easiest and most natural thing in the whole world?",
    "What\'s the most important romantic truth you want us to carry into every future version of ourselves?",
    "What does it feel like to know that this — you, me, us — is the love you\'ll always be most grateful for?",
    "What\'s the single most romantic thing you feel right now that you want to say to me?",
    "What does it feel like when love is patient and warm and steady and entirely yours?",
    "What\'s a romantic version of this exact moment that you want to hold onto forever?",
    "What does it feel like to be in love with someone who loves you back without conditions or hesitation?",
    "What\'s the most romantic and most certain and most quietly hopeful thing you believe about us and our future?",
    "What does it feel like to know that I am yours and you are mine and nothing about that will ever change?",
    "What\'s the one romantic thing you most want to say to me right now, the thing that holds everything?",
    "What does it feel like to be loved so completely and so warmly and so surely across every single day of this distance?",
    "What\'s the most romantic truth you hold about us that makes the hardest days worth every moment?",
    "What does it feel like to know you are my great love and I am yours?",
    "What\'s the single most romantic and most true and most completely felt thing you want me to know today?",
    "What does it feel like to love and be loved by someone who feels like home even from far away?",
    "What\'s the most beautiful romantic thing about choosing each other across every obstacle and every mile?",
    "What does it feel like to know that this love between us is real and rare and worth everything?",
    "What\'s the most romantic version of right now — you there, me here, and still so completely in love?",
    "What does it feel like to carry someone\'s love with you into every part of your day?",
    "What\'s a romantic promise you\'ve made to yourself about how you\'ll love me for the rest of your life?",
    "What does it feel like to be in the middle of a love story you\'d want to tell your children?",
    "What\'s the most romantic thing you believe about where we are going?",
    "What does it feel like to know this is the love that will always have been the one?",
    "What\'s the single most honest, most felt, most tender romantic truth you want me to know?",
    "What does it feel like to love someone who sees you completely and stays completely?",
    "What\'s the most romantic version of the future that you believe in for us?",
    "What does it feel like to be in love in this exact moment — imperfect, distant, and still completely right?",
    "What\'s the truest, warmest, most completely romantic thing you feel right now for me?",
    "What does it feel like to know that you are loved — fully, completely, always — from right here to wherever you are?",
    "What\'s the most romantic thing you could ever say to me, and is today the day you say it?",
    "What does it feel like to be someone who is deeply in love and deeply loved back?",
    "What\'s the most tender, romantic, quietly certain thing you know about us that you\'ll carry forever?",
    "What does it feel like to love someone you also admire and respect and want the whole world for?",
    "What\'s a romantic truth about us that you want to be true in every version of our lives?",
    "What does it feel like to know that every \'I love you\' between us has always meant exactly that?",
    "What\'s the most romantic thing about the way we have built something real and lasting across this distance?",
    "What does it feel like to be someone\'s great love?",
    "What\'s the most completely honest and romantic and true thing you want to say to me right now?",
    "What does it feel like to love you — exactly you, exactly this, exactly now?",
    "What\'s the most romantic thing about us that you could never explain to someone who hadn\'t felt it themselves?",
    "What does it feel like to know that I will always, in every version of my life, choose you?",
    "What\'s the most tender and honest and beautiful and certain romantic thing you could say about what we are?",
    "What does it feel like to be in love with the person who is your home, your choice, and your great adventure?",
    "What\'s the most romantic thing you believe about love itself that only loving me has made you sure of?",
    "What does it feel like to know this love — right here, right now, across all of this — is the real thing?",
    "What\'s the single most romantic and true and quietly joyful thing you feel about us today?",
    "What does it feel like to say I love you and mean every syllable of it from every part of yourself?",
    "What\'s the most romantic version of this exact day — us, apart, in love, and completely sure?",
    "What does it feel like to be in love and to know it and to be known and to choose and be chosen and to be certain?",
    "What\'s the most romantic and hopeful and tender thing you want us to remember about this time in our story?",
    "What does it feel like to know that this love is the kind that people write about because it\'s real?",
    "What\'s the most completely romantic thing you could say about us right now — the whole truth, all of it?",
    "What does it feel like to love someone across every day and every mile and every moment and never once doubt it?",
    "What\'s a romantic truth about what we have together that you would never trade for anything in the world?",
    "What does it feel like to be completely certain that this love is the one you were always hoping to find?",
    "What\'s the last truly romantic thing you want to say to me before we close today\'s question?",
    "What does it feel like to love me — right now, truly, and completely — and to know that I love you exactly the same?",
    "What is the most romantic thing you have ever felt, and is it something you feel for me right now?",
    "What does it feel like to be completely and certainly and joyfully in love with you?",
    "What\'s the most tender thing you want to say to me before we close this question?",
    "What does it feel like to love you — right now, truly, from here, across everything?",
    "What\'s a romantic truth about us so complete and certain that it needs no more words?",
    "What does it feel like to be the one I love most in the world?",
    "What\'s the most beautiful thing about the love we have built across all of this distance?",
    "What does it feel like to be completely chosen, completely loved, completely mine?"
  ],
  "🌱 Growth": [
    "What\'s one habit you\'ve been building lately that you\'re proud of?",
    "What\'s something about yourself that\'s changed since we\'ve been together?",
    "What\'s a goal you have that scares and excites you equally?",
    "What\'s something you\'ve unlearned that made space for something better?",
    "What\'s a lesson this year has taught you about yourself?",
    "What\'s one thing you\'d tell your past self about love?",
    "What does the person you\'re becoming look like?",
    "What\'s a boundary you\'ve learned to hold that once felt impossible?",
    "What\'s something you want to do this year that only you can make happen?",
    "What\'s a belief about yourself you\'re working hard to change?",
    "What\'s the most courageous thing you\'ve done recently?",
    "What\'s a version of success you\'re chasing that isn\'t about money?",
    "What\'s something you\'ve started being more honest about with yourself?",
    "What\'s one thing you\'ve gotten better at in the last six months?",
    "What\'s a dream you\'ve been slowly making real?",
    "What\'s something you\'ve had to let go of to move forward?",
    "What\'s a way you show up for yourself that you\'re proud of?",
    "What\'s something you want us to build together, not just as a couple?",
    "What\'s a mindset shift that\'s changed how you see the world?",
    "What\'s one thing you\'re learning to be more patient with?",
    "What\'s a strength you\'ve discovered about yourself through hardship?",
    "What\'s something you\'ve started doing just for yourself, not for anyone else?",
    "What\'s a conversation with yourself that you keep coming back to?",
    "What does growing up feel like to you right now?",
    "What\'s something you want to be better at for us?",
    "What\'s a value you hold more deeply now than you did a year ago?",
    "What\'s something you\'ve worked hard on that I might not even know about?",
    "What\'s one thing you want to create — not achieve, but create?",
    "What\'s a fear you\'ve started walking toward instead of away from?",
    "What\'s the most important thing you\'re learning about who you want to be?",
    "What\'s a version of yourself you\'re working quietly towards?",
    "What\'s something you\'ve recently started saying yes to that you used to avoid?",
    "What\'s a discipline you\'ve built that\'s changed something in you?",
    "What\'s an old story about yourself you\'re finally ready to rewrite?",
    "What\'s the most honest thing you\'ve come to understand about what you want?",
    "What\'s a mistake you\'ve made that\'s taught you something you\'re grateful for?",
    "What does discipline feel like to you when it actually sticks?",
    "What\'s something you\'ve realised you needed to stop doing to grow?",
    "What\'s a part of your life you\'re actively trying to build rather than just live?",
    "What\'s a goal that felt impossible a year ago that now feels within reach?",
    "What does progress feel like on days when it\'s invisible?",
    "What\'s a form of self-care you\'ve discovered that actually works for you?",
    "What\'s something you\'ve stopped waiting for permission to do?",
    "What\'s a version of yourself that\'s started to quietly emerge?",
    "What\'s something you\'ve had to practise receiving that didn\'t come naturally?",
    "What\'s a belief about what you deserve that you\'ve had to fight for?",
    "What does resilience feel like to you from the inside?",
    "What\'s a thing you\'ve committed to even when it was inconvenient?",
    "What\'s a piece of feedback you\'ve received that you\'re still integrating?",
    "What\'s something you\'re doing now that your past self would be surprised by?",
    "What\'s a way you\'ve learned to trust yourself more this year?",
    "What does showing up for yourself look like on a hard day?",
    "What\'s a version of success you once chased that no longer fits who you\'re becoming?",
    "What\'s something you\'ve realised you\'re more capable of than you thought?",
    "What does change feel like when it\'s slow and invisible?",
    "What\'s a thing you\'ve had to forgive yourself for in order to grow?",
    "What\'s a habit you\'ve built that\'s small but has shifted something bigger?",
    "What does it look like when you make yourself a priority?",
    "What\'s a thing you\'ve gotten better at setting aside in order to focus?",
    "What\'s a part of your character you\'ve consciously tried to develop?",
    "What\'s something you want to understand better about yourself this year?",
    "What does accountability feel like when you apply it to yourself honestly?",
    "What\'s a role you\'ve stepped into recently that\'s stretching you?",
    "What\'s a version of growth that looked nothing like what you expected?",
    "What does it feel like when you choose the harder right thing over the easy wrong one?",
    "What\'s a realisation you\'ve had about your patterns that changed how you behave?",
    "What\'s something you\'re learning about how you handle conflict?",
    "What does emotional growth look like to you in practice?",
    "What\'s a moment this year when you surprised yourself with who you were?",
    "What\'s a thing you\'re currently unlearning about what strength means?",
    "What does rest as a form of growth look like for you?",
    "What\'s a version of yourself you\'d want to meet five years from now?",
    "What\'s something you\'ve started saying to yourself that\'s different from before?",
    "What does integrity feel like when no one is watching?",
    "What\'s a hard conversation you\'ve had with yourself that changed something?",
    "What\'s a limitation you\'ve started to see as information rather than failure?",
    "What does learning from someone younger than you feel like?",
    "What\'s a way you\'ve started investing in yourself that\'s paying off?",
    "What does it feel like to outgrow something you once needed?",
    "What\'s a thing you\'ve stopped pretending is fine that you\'re now addressing?",
    "What does growing through grief or disappointment look like for you?",
    "What\'s a version of your potential that you\'re starting to believe in?",
    "What\'s something you\'ve built in yourself that took longer than it should have?",
    "What does clarity feel like when you\'ve been confused for a long time?",
    "What\'s a thing you\'re currently choosing to get better at even though it\'s uncomfortable?",
    "What does self-trust feel like after you\'ve broken promises to yourself?",
    "What\'s a form of growth that has been invisible to everyone but you?",
    "What\'s something you\'ve realised you\'ve been tolerating that you no longer have to?",
    "What does it feel like to be in the middle of becoming?",
    "What\'s a difficult thing you\'ve done this year that you\'re quietly proud of?",
    "What\'s a way you\'ve learned to regulate yourself that didn\'t exist two years ago?",
    "What does setting a standard for yourself feel like when you actually hold it?",
    "What\'s a realisation about what you want from life that\'s still settling?",
    "What\'s a thing you\'ve been doing that\'s actually working, even when it\'s slow?",
    "What does healthy ambition feel like versus the anxious kind?",
    "What\'s a version of yourself that you\'re protecting while you grow?",
    "What does it mean to you to keep getting better without comparing yourself?",
    "What\'s a thing you\'re currently practising that has no immediate result?",
    "What\'s a way you\'ve changed how you speak to yourself that\'s made a difference?",
    "What does it feel like to want something and go after it anyway despite the doubt?",
    "What\'s a role model you\'ve outgrown and what does that feel like?",
    "What\'s a version of your future that requires the most growth to reach?",
    "What does it feel like to be consistent when the results are still invisible?",
    "What\'s a thing about yourself that you\'ve recently started accepting rather than fixing?",
    "What\'s a goal you\'ve made more specific because you\'ve gotten clearer about what you want?",
    "What does it feel like to invest in yourself when you\'re not sure it will pay off?",
    "What\'s a belief you\'ve built through experience rather than being told?",
    "What does it feel like when your actions finally match your values?",
    "What\'s a way your relationship with failure has changed?",
    "What\'s something you\'ve started doing for the long term even though it costs you now?",
    "What does staying committed to something feel like on the days you want to quit?",
    "What\'s a version of thriving that\'s specific to who you are?",
    "What\'s a realisation you\'ve had about what you actually need to be well?",
    "What does choosing growth over comfort feel like in a real moment?",
    "What\'s a part of your life you\'re actively redesigning rather than just responding to?",
    "What\'s something you\'ve started appreciating about yourself that you used to dismiss?",
    "What does it feel like to become someone you actually respect?",
    "What\'s a form of discipline you\'ve discovered that doesn\'t feel like punishment?",
    "What\'s a thing you\'re unlearning about productivity or achievement?",
    "What does it feel like when you choose a response instead of a reaction?",
    "What\'s a goal you\'ve broken into small enough pieces that it now feels possible?",
    "What does growing in kindness towards yourself feel like?",
    "What\'s a thing you\'ve realised you want to change about how you relate to others?",
    "What\'s a way you\'ve started to listen better, to yourself or to people around you?",
    "What does it feel like to outgrow a version of yourself you once needed?",
    "What\'s a way you\'ve found to stay grounded when growth feels disorienting?",
    "What\'s something you\'re working on that nobody would know about by looking at you?",
    "What does it feel like to start something without knowing if it will work?",
    "What\'s a fear you\'ve named that lost some of its power once you did?",
    "What\'s a thing you\'re learning to do with more care than before?",
    "What does pursuing something because it matters, not because it impresses, feel like?",
    "What\'s a way you\'ve grown that you didn\'t plan for and didn\'t see coming?",
    "What does clarity about your own values feel like when you\'ve lived without it?",
    "What\'s a realisation about yourself that came from a moment of failure?",
    "What\'s a way you\'re investing in your future that your present self has to sacrifice for?",
    "What does it feel like to be in process, not finished?",
    "What\'s something about your growth that you want to share with me?",
    "What\'s a thing you\'ve built in yourself that I\'ve had the privilege of witnessing?",
    "What does it feel like when someone you love grows alongside you?",
    "What\'s a version of yourself that our relationship has helped make possible?",
    "What does it feel like to grow without losing who you are?",
    "What\'s a thing you\'re becoming that you want me to know about?",
    "What\'s a goal that, when you reach it, you want me to be the first to know?",
    "What does it feel like to be growing towards something that includes us?",
    "What\'s a dream you\'ve made a plan for that you\'re executing quietly right now?",
    "What does it feel like to be in the middle of a chapter that will matter later?",
    "What\'s a thing you\'ve been building that has taken longer than you hoped but you haven\'t quit?",
    "What\'s a part of your growth that has required the most courage?",
    "What does it feel like to become someone who keeps their word to themselves?",
    "What\'s a form of growth you\'ve experienced that surprised you with how it felt?",
    "What\'s something you\'ve done recently that aligns perfectly with who you\'re becoming?",
    "What does it feel like to know exactly who you are and what you want, even briefly?",
    "What\'s a thing you\'ve worked on in yourself that has changed how you love me?",
    "What does it feel like to grow as an individual while also growing with someone?",
    "What\'s a version of your best self that you\'re slowly starting to believe in?",
    "What does it feel like when effort and intention and patience finally align?",
    "What\'s something you\'ve let go of that was holding your growth back?",
    "What does it feel like to keep growing even when it would be easier to stay the same?",
    "What\'s the most important thing you\'re learning about yourself right now?",
    "What\'s a thing about who you\'re becoming that you most want me to see?",
    "What does choosing yourself, when it\'s hard, feel like from the inside?",
    "What\'s a version of your future that requires you to be your bravest self?",
    "What\'s something you\'ve started believing about yourself that you didn\'t a year ago?",
    "What does it feel like when growth stops being about arrival and becomes about direction?",
    "What\'s the one thing you most want to grow into this year?",
    "What\'s a thing you\'re building in yourself that is entirely for you, and for the life you want?",
    "What does it feel like to know you are not who you were and not yet who you\'ll be?",
    "What\'s something you\'re growing towards that you hope we grow towards together?",
    "What does the best version of yourself feel like when you imagine it clearly?",
    "What\'s a thing you\'ve worked on privately that has changed everything quietly?",
    "What does it feel like to be proud of yourself in a way that doesn\'t need anyone else to see?",
    "What\'s a version of growing together that you believe is possible for us?",
    "What does it feel like to be in the middle of your own becoming, and to know it?",
    "What\'s a way you\'ve grown that you only noticed because of how differently you responded to something?",
    "What\'s something you\'ve started letting yourself want again after shutting it down?",
    "What does becoming feel like when it happens quietly, without announcements?",
    "What\'s a version of you that\'s been emerging that you haven\'t introduced to anyone yet?",
    "What\'s something you\'ve had to work on in yourself that has made loving me easier?",
    "What does it feel like when your actions finally start catching up to your intentions?",
    "What\'s a dream you\'ve decided to take seriously that you once treated as a wish?",
    "What\'s a discipline or habit that\'s become a part of who you are this year?",
    "What does personal growth feel like when it\'s inconvenient and you do it anyway?",
    "What\'s a way you\'ve started investing in yourself that didn\'t feel natural at first?",
    "What does healing feel like when it\'s messy and incomplete and still moving forward?",
    "What\'s something you\'ve stopped expecting from other people that you now give yourself?",
    "What does it feel like to make a decision based on who you\'re becoming rather than who you\'ve been?",
    "What\'s a version of success you\'ve redefined to fit who you actually are?",
    "What does doing hard things consistently feel like when it finally becomes a pattern?",
    "What\'s something you\'ve gotten better at that surprised you with how good it feels?",
    "What does self-respect look like in practice for you on an ordinary day?",
    "What\'s a way you\'ve chosen your growth over your comfort recently?",
    "What does it feel like to trust your own judgement more than you used to?",
    "What\'s a limiting belief you\'ve been slowly dismantling?",
    "What does it feel like to be in a phase of your life that will matter later?",
    "What\'s a thing you\'ve accepted about yourself that has freed you to move forward?",
    "What does it feel like when the version of yourself you\'ve been working toward starts showing up?",
    "What\'s something you know now that would have helped the version of you from two years ago?",
    "What does it feel like to have more capacity for something that used to exhaust you?",
    "What\'s a conversation you\'ve been having with yourself about what you really want?",
    "What does being intentional about your life feel like versus just living reactively?",
    "What\'s a thing you\'ve started building for your future that your present self has to make sacrifices for?",
    "What does emotional intelligence feel like when you\'re actually practising it?",
    "What\'s a skill you\'ve prioritised this year that will compound over time?",
    "What does it feel like to outgrow an environment that once felt like home?",
    "What\'s something you\'ve had to be honest with yourself about that was uncomfortable?",
    "What does it feel like to grow through something rather than just out of it?",
    "What\'s a way you\'ve changed how you handle uncertainty that you\'re proud of?",
    "What does it feel like to work toward something with no guarantee of the outcome?",
    "What\'s a thing you\'ve relearned as an adult that you think children understand naturally?",
    "What does it feel like to invest in your health as a form of self-respect?",
    "What\'s a challenge you\'ve given yourself that has pushed you in ways you needed?",
    "What does it feel like to stop playing small in an area of your life?",
    "What\'s a thing about your mindset that\'s shifted and made everything else easier?",
    "What does it feel like to say no to something that would have pleased others but not served you?",
    "What\'s a way you\'ve started showing up differently in your relationships because of your growth?",
    "What does it feel like to see yourself the way someone who loves you sees you?",
    "What\'s a thing you\'ve started being more intentional about that is quietly changing everything?",
    "What does it feel like to be growing into a version of yourself you actually respect?",
    "What\'s a piece of self-knowledge you\'ve earned through experience?",
    "What does it feel like to keep a commitment to yourself across many days?",
    "What\'s something you\'ve started doing for your mental health that works?",
    "What does growth feel like in the moments when it asks everything of you?",
    "What\'s a way you\'ve learned to be kinder to yourself in moments of failure?",
    "What does it feel like to build something slow and meaningful versus something fast and hollow?",
    "What\'s a version of your best day that you\'re actively building toward?",
    "What does it feel like when your patience with yourself finally starts to feel deserved?",
    "What\'s a thing you\'ve started doing that your future self will thank you for?",
    "What does self-awareness feel like when it\'s uncomfortable and useful at the same time?",
    "What\'s a way you\'ve grown in how you communicate that\'s improved everything around it?",
    "What does it feel like to be someone who keeps promises to themselves?",
    "What\'s a version of growth that has nothing to do with achievement?",
    "What does consistency feel like before it becomes easy?",
    "What\'s something you\'re learning about what you actually need versus what you thought you wanted?",
    "What does it feel like to grow toward something even when the path isn\'t clear?",
    "What\'s a thing you\'ve started believing about your own potential that changes how you move?",
    "What does it feel like to choose honesty with yourself over the comfort of a narrative that isn\'t true?",
    "What\'s a form of rest that has become part of your growth rather than a break from it?",
    "What does becoming the person you want to be feel like in the slowest and hardest moments?",
    "What\'s something you\'ve started to understand about yourself that only struggle could have taught you?",
    "What does it feel like to stop measuring your growth by comparison and start measuring by direction?",
    "What\'s a way you\'ve learned to sit with discomfort rather than escape it?",
    "What does it feel like to be committed to something larger than your immediate comfort?",
    "What\'s a thing you\'ve started protecting in your life that makes everything else more possible?",
    "What does it feel like to grow in a way that no one else can see but that changes everything?",
    "What\'s a version of thriving that is specific, personal, and yours alone?",
    "What does building a life you actually want feel like when it\'s still in progress?",
    "What\'s a thing you\'ve started giving yourself that used to require someone else\'s permission?",
    "What does it feel like when growth starts to feel like identity rather than effort?",
    "What\'s a lesson you keep relearning that tells you something important about yourself?",
    "What does it feel like to grow in love for yourself the same way you grow in love for me?",
    "What\'s a thing about who you\'re becoming that you want to share with me today?",
    "What does it feel like to know that every step you take toward yourself also brings you closer to us?",
    "What\'s a version of growing together that you believe in for us?",
    "What does it feel like to support each other\'s individual growth across a distance?",
    "What\'s something about your growth this year that has made you a better partner to me?",
    "What does it feel like to keep becoming, to keep trying, to keep believing in who you\'re turning into?",
    "What\'s the most important thing you want to grow into before we close this distance?",
    "What does it feel like to know that every version of yourself is still worthy of love, even the one still learning?",
    "What\'s a version of your growth that fills you with quiet, genuine pride?",
    "What does it feel like to grow and be witnessed in that growing by someone who loves you?",
    "What\'s something you\'ve built in yourself this year that will shape everything that comes next?",
    "What does it feel like to know that who you\'re becoming is someone worth becoming?",
    "What\'s the thing you most want to say about your growth today, and who better to say it to than me?",
    "What does it feel like to be growing, imperfectly and bravely, in the direction of the life you want?",
    "What\'s a version of yourself you\'re proud of right now, even in the middle of still becoming?",
    "What does it feel like to know that your growth is not just for you but also for us?",
    "What\'s a thing about who you are becoming that you want me to witness and remember?",
    "What does it feel like to grow toward love at the same time as you grow toward yourself?",
    "What\'s the truest thing you can say about where you are in your growth right now?",
    "What does it feel like to be doing the work, even quietly, even when no one is watching?",
    "What\'s a version of becoming that is not about arriving but about the direction you keep choosing?",
    "What does it feel like to know that your growth today is also a gift to the us of tomorrow?",
    "What\'s something you\'ve built quietly in yourself that will matter loudly later?",
    "What does it feel like when growth stops being something you pursue and becomes something you are?",
    "What\'s a version of your best self that you have started to genuinely believe in?",
    "What does it feel like to be both in process and already enough?",
    "What\'s a way you\'ve grown that has made you more patient with yourself?",
    "What does it feel like when personal growth also makes you a better partner to me?",
    "What\'s a thing you\'ve learned about yourself this year that you\'re still sitting with?",
    "What does it feel like to keep growing even when you\'re tired?",
    "What\'s a version of you that is emerging slowly and quietly and you\'re beginning to trust?",
    "What does it feel like to grow toward something rather than away from something?",
    "What\'s a way you\'ve gotten better at being honest with yourself?",
    "What does it feel like to be in the middle of your most important becoming?",
    "What\'s something you\'ve built in your character that no one gave you, you built it yourself?",
    "What does it feel like to choose growth on the days it would be easier to stay the same?",
    "What\'s a version of growing together with me that you believe we\'re already doing?",
    "What does it feel like when your growth becomes visible to the people who love you?",
    "What\'s something about who you\'re becoming that you want me to witness?",
    "What does it feel like to know that every step you take toward yourself is also a step toward us?",
    "What\'s a form of growth you\'re in the middle of that is the most important work of this season?",
    "What does it feel like to grow and be loved in the growing?",
    "What\'s a thing about your growth right now that you are most proud of?",
    "What does it feel like to know that the version of yourself you\'re becoming is worth becoming?",
    "What\'s a way growing has surprised you this year?",
    "What does it feel like to be building a life on purpose?",
    "What\'s the most important thing you\'ve learned about yourself through loving someone across a distance?",
    "What does it feel like to grow slowly and steadily and to trust that it counts?",
    "What\'s a version of your growth that has also made our relationship stronger?",
    "What does it feel like to be becoming someone you are genuinely proud of?",
    "What\'s the most honest and true and quietly proud thing you can say about your growth right now?",
    "What does it feel like to know that growing is the most courageous and continuous act of love you can give — to yourself and to me?",
    "What\'s the single most important thing you are growing toward that you want me to know about today?",
    "What does it feel like to be doing the work of becoming — imperfectly, bravely, and every single day?",
    "What\'s the truest thing you can say about who you are becoming and what that means for us?",
    "What does it feel like to know that your growth is not just your own — it is also ours?",
    "What\'s a version of yourself you are growing into that you want me to be proud of alongside you?",
    "What does it feel like to grow in love for yourself and in love for me at the exact same time?",
    "What\'s a thing about the way you\'re becoming that you want to remember in ten years?",
    "What does it feel like to be in the middle of your most honest, most courageous, most important growth?",
    "What\'s the most beautiful and true and quietly hopeful thing you can say about who you are becoming?",
    "What does it feel like to grow toward the life you want with the person you love?",
    "What\'s the version of yourself that is emerging right now that you want me to see?",
    "What does it feel like to keep becoming, to keep trying, to keep believing that it matters?",
    "What\'s the most important growth you\'ve done this year that has made loving me feel more possible?",
    "What does it feel like to know that the work you\'re doing on yourself is also the most loving thing you do for us?",
    "What\'s the single most honest and proud and hopeful thing you can say about your growth and where it\'s taking you?",
    "What does it feel like to be growing — slowly, bravely, imperfectly, but always in the right direction?",
    "What\'s the truest and most important and most quietly certain thing you know about who you are becoming?",
    "What does it feel like to be in the middle of your becoming and to be loved completely in the middle of it?",
    "What\'s a version of your growth that you want us to build on together for the rest of our lives?",
    "What does it feel like to grow and be witnessed in that growing by someone who believes in you completely?",
    "What\'s the most honest, most proud, most quietly hopeful thing you want to say about your growth today?",
    "What does it feel like to know that you are growing, that it is working, and that I am here rooting for every version of you?",
    "What\'s the most important thing you want me to know about who you are becoming and what it means for us?",
    "What does it feel like to be in the middle of the most important becoming of your life and to know that I am in it with you?",
    "What\'s the thing about your growth that fills you with the most genuine and quiet and real pride?",
    "What does it feel like to grow toward your best self knowing that your best self is also growing toward me?",
    "What\'s the single most truthful and hopeful and beautiful thing you can say about your growth right now?",
    "What does it feel like to know that the person you are becoming is someone worth waiting for, worth choosing, and worth loving?",
    "What\'s a version of personal growth that is also, quietly and completely, an act of love?",
    "What does it feel like to grow, to become, to build, to choose, and to do all of it while loving you?",
    "What\'s the most important thing your growth is teaching you about the life and the love you are building?",
    "What does it feel like to be at once becoming and already enough, growing and already worthy, changing and already loved?",
    "What\'s the most real and honest and tender thing about your growth that you have been waiting to share with me?",
    "What does it feel like to know that every day you grow is a day closer to the version of us that we\'re both becoming?",
    "What\'s the most quietly important thing you are becoming that you want me to always believe in and always see?",
    "What does it feel like to grow — not because you have to but because you want to — and to do it alongside someone who loves you?",
    "What\'s the most honest and proud and quietly joyful thing you can say about your growth right now and what it is making possible?",
    "What does it feel like to be the person you are becoming, right now, in this moment, in this love, in this life?",
    "What\'s the most important thing about your growth this year that you want both of us to carry into everything that comes next?",
    "What does it feel like to know that your growth is not just your own, it is also the gift you give to us and to the future we\'re building?",
    "What\'s the truest, warmest, most completely honest thing you can say about who you are becoming and what it means to be loved in the becoming?",
    "What does it feel like to grow, completely and bravely and imperfectly, in the direction of the life and the love and the future that is yours?",
    "What\'s the most important, most honest, most quietly and completely true thing about your growth that you want to say to me today?",
    "What does it feel like to know that everything you are building in yourself is also everything you are building for us?",
    "What\'s a version of growing together that you want us to be intentional about for the rest of our lives?",
    "What does it feel like to grow, and to be seen growing, by the person you love most in the world?",
    "What\'s the single most beautiful and true thing about your growth right now that you want to share with me?",
    "What does it feel like to know that the becoming is the point, and that I am here, and that it is enough?",
    "What\'s the most important thing about your growth right now that makes you feel ready for everything that\'s coming for us?",
    "What does it feel like to be in the middle of becoming everything you want to be while loving and being loved by me?",
    "What is the most important and most honest and most completely true thing about who you are becoming that you want me to always know?",
    "What does it feel like to grow, to become, to build, to choose love, and to know that all of it is enough?",
    "What\'s the version of your growth that you are most proud of and most ready to bring into every chapter of our story that is still to come?",
    "What does it feel like to be exactly who you are right now — growing, becoming, imperfect, certain — and to know that you are completely loved?",
    "What\'s the most real and most honest and most quietly certain thing about your growth that you want us both to carry forward into every version of tomorrow?",
    "What does it feel like to grow and to love and to become and to know that all of it — every single bit of it — is pointing toward something worth every moment?",
    "What\'s the single most important thing your growth is telling you about who you are and what you want and where you are going and who you want to go there with?",
    "What does it feel like to be becoming — slowly, bravely, and completely — the person you want to be, beside the person you love?",
    "What\'s the most honest, most proud, most quietly joyful and deeply true thing you want to say about your growth and your love and yourself today?",
    "What\'s the most important thing you are growing into that you want me to always believe in?",
    "What does it feel like to grow toward the best version of yourself while being loved by me?",
    "What\'s a form of growth that is quiet and personal and yours and completely worth it?",
    "What does it feel like to grow and to love and to know that both are taking you somewhere real?"
  ],
};

// Pick question by day-of-year so it changes daily and is same for both users
const getDailyQuestion = (mood) => {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const dayOfYear = Math.floor((new Date() - start) / 86400000);
  const bank = QUESTION_BANK[mood] || QUESTION_BANK["💕 Romantic"];
  return bank[dayOfYear % bank.length];
};

// Key format: "YYYY-MM-DD::moodKey"
const todayStr = () => new Date().toISOString().slice(0, 10);
const storeKey = (mood) => `${todayStr()}::${mood}`;
const answersKey = (mood) => `answers::${storeKey(mood)}`;

// ─── Netlify Blobs API helpers ──────────────────────────────────────────
// All data stored in Netlify Blobs via serverless function at /api/data
// No configuration needed — works automatically on Netlify

const fsGet = async (key) => {
  try {
    const r = await fetch(`/api/data?key=${encodeURIComponent(key)}`);
    if (!r.ok) return null;
    const json = await r.json();
    return json.data ?? null;
  } catch { return null; }
};

const fsSet = async (key, obj) => {
  try {
    await fetch(`/api/data?key=${encodeURIComponent(key)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
  } catch {}
};

// Local in-memory cache (for fast reads within session)
const getSharedStore = () => {
  if (!window.__akash_anumaa_store) {
    window.__akash_anumaa_store = {
      dailyQuestions: {},
      dailyAnswers: {},
      journal: [],
      currentMoods: { Akash: null, Anumaa: null },
    };
  }
  return window.__akash_anumaa_store;
};

const writeToStore = (patch) => {
  const store = getSharedStore();
  Object.assign(store, patch);
};

const STARS = Array.from({ length: 36 }, (_, i) => ({
  left: ((i * 73 + 17) % 97) + "%",
  top: ((i * 53 + 29) % 91) + "%",
  size: i % 5 === 0 ? "3px" : "1.5px",
  dur: 2 + (i % 3),
  delay: (i % 4) * 0.7,
}));

export default function DailyQuestionApp() {
  const [user, setUser] = useState(null);
  const [selecting, setSelecting] = useState(false);
  const [loginAnim, setLoginAnim] = useState(false);
  const [view, setView] = useState("home");
  const [qMood, setQMood] = useState("💕 Romantic");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState({ Akash: "", Anumaa: "" });
  const [loading, setLoading] = useState(false); // kept for compatibility
  const [animating, setAnimating] = useState(false);
  const [journal, setJournal] = useState([]);
  const [viewingAnswer, setViewingAnswer] = useState(null);
  const [saved, setSaved] = useState(false);
  const [currentMoods, setCurrentMoods] = useState({ Akash: null, Anumaa: null });
  const [showMoodPicker, setShowMoodPicker] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => { setLoginAnim(true); }, []);

  // ── Toast helpers ──
  const showToast = (message, emoji, color) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, emoji: emoji || "💌", color: color || "#ffb3c8" }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  };

  // ── Push notification via server ──────────────────────────────────────
  // Change this to your server's URL when deploying
  const SERVER_URL = "http://localhost:3001";

  const urlBase64ToUint8Array = (base64String) => {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    return Uint8Array.from([...rawData].map(c => c.charCodeAt(0)));
  };

  const registerPush = async (userName) => {
    try {
      if (!("serviceWorker" in navigator) || !("PushManager" in window)) return;
      const permission = await Notification.requestPermission();
      if (permission !== "granted") return;

      const reg = await navigator.serviceWorker.ready;
      const keyRes = await fetch(`${SERVER_URL}/api/vapid-key`);
      const { publicKey } = await keyRes.json();

      const subscription = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey),
      });

      await fetch(`${SERVER_URL}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userName, subscription }),
      });
      console.log(`[push] ${userName} subscribed`);
    } catch (err) {
      console.warn("[push] Registration failed:", err.message);
    }
  };

  const sendPushNotif = async (event, payload) => {
    try {
      await fetch(`${SERVER_URL}/api/notify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fromUser: user, event, payload }),
      });
    } catch (err) {
      console.warn("[push] Send failed:", err.message);
    }
  };

  // Sync all shared data from Firebase into local store + state
  const syncFromFirebase = async (mood) => {
    try {
      setLoading(true);
      const [qDoc, aDoc, jDoc, mDoc] = await Promise.all([
        fsGet("questions"),
        fsGet("answers"),
        fsGet("journal"),
        fsGet("moods"),
      ]);
      const store = getSharedStore();
      if (qDoc) store.dailyQuestions = qDoc;
      if (aDoc) store.dailyAnswers = aDoc;
      if (jDoc && jDoc.entries) store.journal = jDoc.entries;
      if (mDoc) store.currentMoods = { Akash: mDoc.Akash || null, Anumaa: mDoc.Anumaa || null };
      const q = store.dailyQuestions[storeKey(mood)] || "";
      const a = store.dailyAnswers[answersKey(mood)] || { Akash: "", Anumaa: "" };
      setQuestion(q);
      setAnswers({ ...a });
      setJournal([...(store.journal || [])]);
      setCurrentMoods({ ...store.currentMoods });
      setLoading(false);
      return q;
    } catch {
      setLoading(false);
      return "";
    }
  };

  // Get today's question for this mood (deterministic — same for both users)
  const ensureQuestion = (mood) => {
    const store = getSharedStore();
    const key = storeKey(mood);
    if (!store.dailyQuestions[key]) {
      store.dailyQuestions[key] = getDailyQuestion(mood);
      fsSet("questions", store.dailyQuestions);
    }
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
    setQuestion(store.dailyQuestions[key]);
    const a = store.dailyAnswers[answersKey(mood)] || { Akash: "", Anumaa: "" };
    setAnswers({ ...a });
  };
  
  // Re-sync from Firebase when switching moods (picks up partner's answers)
  const handleQMoodClickSync = async (m) => {
    if (m === qMood) return;
    setQMood(m);
    setSaved(false);
    const store = getSharedStore();
    const a = await fsGet("answers");
    if (a) store.dailyAnswers = a;
    ensureQuestion(m);
    const freshA = store.dailyAnswers[answersKey(m)] || { Akash: "", Anumaa: "" };
    setAnswers({ ...freshA });
  };

  const handleSelectUser = (name) => {
    setSelecting(true);
    setTimeout(async () => {
      setUser(name);
      setViewingAnswer(name);
      registerPush(name);
      setSelecting(false);
      const defaultMood = "💕 Romantic";
      setQMood(defaultMood);
      // Sync from Firebase first
      const q = await syncFromFirebase(defaultMood);
      // If no question cached for today, generate and save
      if (!q) ensureQuestion(defaultMood);
    }, 500);
  };

  const handleQMoodClick = (m) => {
    handleQMoodClickSync(m);
  };

  const handleAnswerChange = (val) => {
    const next = { ...answers, [user]: val };
    setAnswers(next);
    const store = getSharedStore();
    store.dailyAnswers[answersKey(qMood)] = next;
    // Persist draft answer to Firebase
    fsSet("answers", store.dailyAnswers);
  };

  const handleSave = () => {
    if (!question || !answers[user]) return;
    const store = getSharedStore();
    const key = answersKey(qMood);
    // Make sure latest answers are in store
    store.dailyAnswers[key] = { ...answers };

    // Upsert journal entry for this question
    const existing = store.journal.findIndex(e => e.question === question);
    let newJournal;
    if (existing >= 0) {
      newJournal = store.journal.map((e, i) =>
        i === existing ? { ...e, answers: { ...e.answers, [user]: answers[user] } } : e
      );
    } else {
      newJournal = [{
        id: Date.now(),
        question,
        mood: qMood,
        answers: { ...answers },
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      }, ...store.journal];
    }
    writeToStore({ journal: newJournal });
    setJournal([...newJournal]);
    setSaved(true);
    // Save journal + answers to Firebase so both users see it
    fsSet("journal", { entries: newJournal });
    fsSet("answers", { ...getSharedStore().dailyAnswers, [answersKey(qMood)]: { ...answers } });
    const otherName = user === "Akash" ? "Anumaa" : "Akash";
    showToast(`Answer saved! ${otherName} will be notified 💬`, "✅", user === "Akash" ? "#7eb8f7" : "#ffb3c8");
    sendPushNotif("answer_saved", { preview: answers[user] });
  };

  const handleSetCurrentMood = (moodObj) => {
    const next = { ...currentMoods, [user]: moodObj };
    setCurrentMoods(next);
    writeToStore({ currentMoods: next });
    // Save mood to Firebase so partner sees it
    fsSet("moods", {
      Akash: next.Akash ? next.Akash : null,
      Anumaa: next.Anumaa ? next.Anumaa : null,
    });
    setShowMoodPicker(false);
    const otherName = user === "Akash" ? "Anumaa" : "Akash";
    showToast(`Mood updated to ${moodObj.emoji} ${moodObj.label} — ${otherName} can see it!`, moodObj.emoji, user === "Akash" ? "#7eb8f7" : "#ffb3c8");
    sendPushNotif("mood_changed", { mood: moodObj.label, emoji: moodObj.emoji });
  };

  // Poll Firebase every 30s to pick up partner changes
  useEffect(() => {
    if (!user) return;
    const interval = setInterval(async () => {
      const store = getSharedStore();
      const [aDoc, jDoc, mDoc] = await Promise.all([
        fsGet("answers"),
        fsGet("journal"),
        fsGet("moods"),
      ]);
      if (aDoc) {
        store.dailyAnswers = aDoc;
        const fresh = aDoc[answersKey(qMood)] || { Akash: "", Anumaa: "" };
        setAnswers({ ...fresh });
      }
      if (jDoc && jDoc.entries) {
        store.journal = jDoc.entries;
        setJournal([...jDoc.entries]);
      }
      if (mDoc) {
        const moods = { Akash: mDoc.Akash || null, Anumaa: mDoc.Anumaa || null };
        store.currentMoods = moods;
        setCurrentMoods({ ...moods });
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [user, qMood]);

  const handleLogout = () => {
    setUser(null);
    setView("home");
    setSaved(false);
    setShowMoodPicker(false);
    setQuestion("");
    setLoginAnim(false);
    setTimeout(() => setLoginAnim(true), 50);
  };

  const person = user ? PEOPLE[user] : null;
  const other = user === "Akash" ? "Anumaa" : "Akash";
  const otherPerson = user ? PEOPLE[other] : null;
  const myMood = currentMoods[user];
  const theirMood = currentMoods[other];
  const qMoodEmoji = qMood.split(" ")[0];
  const qMoodLabel = qMood.split(" ").slice(1).join(" ");

  // ─── LOGIN ──────────────────────────────────────────────────────────
  if (!user) {
    return (
      <div style={{ minHeight: "100vh", background: "#0d0b14", fontFamily: "'Georgia','Times New Roman',serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", position: "relative", overflow: "hidden" }}>
        <style>{`
          @keyframes twinkle{0%,100%{opacity:0.2}50%{opacity:0.9}}
          @keyframes heartbeat{0%,100%{transform:scale(1)}50%{transform:scale(1.13)}}
          @keyframes slideOut{to{opacity:0;transform:scale(0.93)}}
          .pcard{transition:all 0.22s ease;cursor:pointer;}
          .pcard:hover{transform:translateY(-5px)!important;}
        `}</style>
        {STARS.map((s, i) => <div key={i} style={{ position: "fixed", width: s.size, height: s.size, borderRadius: "50%", background: "rgba(255,255,255,0.5)", left: s.left, top: s.top, animation: `twinkle ${s.dur}s ease-in-out infinite`, animationDelay: `${s.delay}s`, pointerEvents: "none" }} />)}

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "420px", width: "100%", opacity: loginAnim ? 1 : 0, transform: loginAnim ? "none" : "translateY(20px)", transition: "all 0.6s ease", animation: selecting ? "slideOut 0.4s ease forwards" : "none" }}>
          <div style={{ fontSize: "38px", marginBottom: "4px", animation: "heartbeat 2.5s ease-in-out infinite" }}>💌</div>
          <div style={{ fontSize: "11px", letterSpacing: "0.3em", color: "rgba(255,180,200,0.4)", textTransform: "uppercase", marginBottom: "8px" }}>long distance, close hearts</div>
          <h1 style={{ margin: "0 0 4px", fontSize: "30px", fontWeight: "normal", color: "#fff", letterSpacing: "-0.02em" }}>Lovvy</h1>
          <p style={{ margin: "0 0 44px", fontSize: "14px", color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>Akash & Anumaa</p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", marginBottom: "20px", letterSpacing: "0.05em" }}>Which heart is opening the app? 💓</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            {Object.entries(PEOPLE).map(([name, p]) => (
              <div key={name} className="pcard" onClick={() => handleSelectUser(name)} style={{ flex: 1, maxWidth: "170px", background: "rgba(255,255,255,0.03)", border: `0.5px solid ${p.color}44`, borderRadius: "20px", padding: "28px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: `radial-gradient(circle, ${p.color}22, transparent)`, border: `1px solid ${p.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px" }}>{p.emoji}</div>
                <div style={{ fontSize: "18px", color: p.color }}>{name}</div>
                <div style={{ fontSize: "11px", color: p.color, background: `${p.color}18`, padding: "4px 12px", borderRadius: "20px", border: `0.5px solid ${p.color}33` }}>that's me →</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "40px", fontSize: "12px", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>Your answers and moods are always visible to each other ♡</div>
        </div>
      </div>
    );
  }

  // ─── MAIN APP ───────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: "#0d0b14", fontFamily: "'Georgia','Times New Roman',serif", padding: "0 0 80px", position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes twinkle{0%,100%{opacity:0.2}50%{opacity:0.9}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse-glow{0%,100%{box-shadow:0 0 20px ${person.glow}}50%{box-shadow:0 0 44px ${person.glow}}}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes pop{0%{transform:scale(1)}50%{transform:scale(1.07)}100%{transform:scale(1)}}
        @keyframes moodIn{from{opacity:0;transform:translateY(-8px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes toastIn{from{opacity:0;transform:translateY(20px) scale(0.92)}to{opacity:1;transform:translateY(0) scale(1)}}
        .qmood-pill{cursor:pointer;padding:6px 13px;border-radius:20px;font-size:13px;border:0.5px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.6);font-family:'Georgia',serif;transition:all 0.2s;background:transparent;}
        .qmood-pill:hover{background:rgba(255,255,255,0.1);}
        .qmood-pill.active{background:${person.color}28;border-color:${person.color}77;color:${person.color};}
        textarea{background:rgba(255,255,255,0.04);border:0.5px solid rgba(255,255,255,0.12);border-radius:12px;color:rgba(255,255,255,0.88);font-family:'Georgia',serif;font-size:15px;line-height:1.7;padding:14px 16px;width:100%;resize:none;outline:none;transition:border-color 0.2s;box-sizing:border-box;}
        textarea:focus{border-color:${person.color}66;}
        textarea::placeholder{color:rgba(255,255,255,0.38);font-style:italic;}
        .nav-tab{cursor:pointer;padding:9px 26px;border-radius:10px;font-size:14px;letter-spacing:0.02em;transition:all 0.2s;border:0.5px solid rgba(255,255,255,0.1);font-family:'Georgia',serif;background:rgba(255,255,255,0.04);}
        .nav-tab.active{background:${person.color}22;color:${person.color};border-color:${person.color}66;}
        .nav-tab:not(.active){color:rgba(255,255,255,0.5);}
        .nav-tab:not(.active):hover{background:rgba(255,255,255,0.08);}
        .save-btn{transition:all 0.2s;}
        .save-btn:hover{box-shadow:0 0 24px ${person.glow};transform:translateY(-1px);}
        .ans-tab{transition:all 0.18s;cursor:pointer;}
        .mood-emoji-btn{cursor:pointer;transition:all 0.18s;background:rgba(255,255,255,0.04);border:0.5px solid rgba(255,255,255,0.08);border-radius:12px;padding:10px 6px;display:flex;flex-direction:column;align-items:center;gap:4px;}
        .mood-emoji-btn:hover{background:rgba(255,255,255,0.1);transform:scale(1.08);}
        .mood-emoji-btn.selected{border-color:${person.color}88;background:${person.color}18;}
      `}</style>

      {STARS.map((s, i) => <div key={i} style={{ position: "fixed", width: s.size, height: s.size, borderRadius: "50%", background: "rgba(255,255,255,0.4)", left: s.left, top: s.top, animation: `twinkle ${s.dur}s ease-in-out infinite`, animationDelay: `${s.delay}s`, pointerEvents: "none", zIndex: 0 }} />)}

      {/* ── HEADER ── */}
      <div style={{ position: "relative", zIndex: 2, padding: "26px 20px 0", textAlign: "center" }}>
        <div style={{ position: "absolute", top: "26px", right: "16px" }}>
          <button onClick={handleLogout} style={{ cursor: "pointer", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "5px 14px", color: "rgba(255,255,255,0.5)", fontSize: "12px", fontFamily: "Georgia, serif" }}>switch</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "7px", marginBottom: "4px" }}>
          <span style={{ fontSize: "18px" }}>{person.emoji}</span>
          <span style={{ fontSize: "14px", color: person.color, letterSpacing: "0.04em" }}>{user}</span>
        </div>
        <div style={{ fontSize: "10px", letterSpacing: "0.25em", color: "rgba(255,180,200,0.35)", textTransform: "uppercase", marginBottom: "3px" }}>long distance, close hearts</div>
        <h1 style={{ margin: 0, fontSize: "25px", fontWeight: "normal", color: "#fff", letterSpacing: "-0.02em" }}>Lovvy</h1>
        <div style={{ marginTop: "6px", fontSize: "11px", color: "rgba(255,255,255,0.38)", letterSpacing: "0.05em" }}>
          {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
        </div>
      </div>

      {/* ── MOOD WIDGET ── */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "520px", margin: "16px auto 0", padding: "0 20px" }}>
        <div style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "18px", padding: "14px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: showMoodPicker ? "14px" : "0" }}>
            {/* My mood */}
            <button onClick={() => setShowMoodPicker(v => !v)} style={{ cursor: "pointer", flex: 1, background: myMood ? `${person.color}14` : "rgba(255,255,255,0.04)", border: `0.5px solid ${myMood ? person.color + "44" : "rgba(255,255,255,0.08)"}`, borderRadius: "12px", padding: "10px 12px", display: "flex", alignItems: "center", gap: "8px", transition: "all 0.2s", fontFamily: "Georgia, serif" }}>
              <span style={{ fontSize: "22px" }}>{myMood ? myMood.emoji : "✨"}</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "10px", color: person.color, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>{user}</div>
                <div style={{ fontSize: "13px", color: myMood ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.5)", fontStyle: myMood ? "normal" : "italic" }}>{myMood ? myMood.label : "How are you feeling?"}</div>
              </div>
              <span style={{ marginLeft: "auto", fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>{showMoodPicker ? "▲" : "▼"}</span>
            </button>

            <div style={{ color: "rgba(255,255,255,0.12)", fontSize: "18px" }}>·</div>

            {/* Their mood */}
            <div style={{ flex: 1, background: theirMood ? `${otherPerson.color}10` : "rgba(255,255,255,0.02)", border: `0.5px solid ${theirMood ? otherPerson.color + "33" : "rgba(255,255,255,0.06)"}`, borderRadius: "12px", padding: "10px 12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "22px" }}>{theirMood ? theirMood.emoji : "💤"}</span>
              <div>
                <div style={{ fontSize: "10px", color: otherPerson.color, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>{other}</div>
                <div style={{ fontSize: "13px", color: theirMood ? `${otherPerson.color}cc` : "rgba(255,255,255,0.42)", fontStyle: theirMood ? "normal" : "italic" }}>{theirMood ? theirMood.label : "not set yet…"}</div>
              </div>
            </div>
          </div>

          {showMoodPicker && (
            <div style={{ animation: "moodIn 0.25s ease" }}>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>How are you feeling right now?</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "6px" }}>
                {CURRENT_MOODS.map(m => (
                  <button key={m.label} className={`mood-emoji-btn ${myMood?.label === m.label ? "selected" : ""}`} onClick={() => handleSetCurrentMood(m)}>
                    <span style={{ fontSize: "22px" }}>{m.emoji}</span>
                    <span style={{ fontSize: "9px", color: myMood?.label === m.label ? person.color : "rgba(255,255,255,0.5)", letterSpacing: "0.03em" }}>{m.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── NAV ── */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", gap: "8px", padding: "16px 20px 12px", borderBottom: "0.5px solid rgba(255,255,255,0.06)", marginBottom: "4px" }}>
        <button className={`nav-tab ${view === "home" ? "active" : ""}`} onClick={() => setView("home")}>Today</button>
        <button className={`nav-tab ${view === "journal" ? "active" : ""}`} onClick={async () => { setView("journal"); const jDoc = await fsGet("journal"); if (jDoc && jDoc.entries) { getSharedStore().journal = jDoc.entries; setJournal([...jDoc.entries]); } else setJournal([...getSharedStore().journal]); }}>
          Journal {journal.length > 0 && `(${journal.length})`}
        </button>
      </div>

      {/* ── HOME ── */}
      {view === "home" && (
        <div style={{ position: "relative", zIndex: 1, maxWidth: "520px", margin: "0 auto", padding: "20px 20px 0", animation: "fadeIn 0.4s ease" }}>

          {/* Category pills */}
          <div style={{ display: "flex", gap: "7px", flexWrap: "wrap", marginBottom: "16px", justifyContent: "center" }}>
            {Q_MOODS.map(m => (
              <button key={m} className={`qmood-pill ${qMood === m ? "active" : ""}`} onClick={() => handleQMoodClick(m)}>{m}</button>
            ))}
          </div>

          {/* Question card */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: `0.5px solid ${person.color}44`, borderRadius: "20px", padding: "30px 22px", textAlign: "center", marginBottom: "20px", animation: "pulse-glow 4s ease-in-out infinite", minHeight: "148px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", opacity: animating ? 0.25 : 1, transition: "opacity 0.3s" }}>
            <div style={{ fontSize: "20px" }}>{qMoodEmoji}</div>
            {loading ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "18px", height: "18px", border: `2px solid ${person.color}33`, borderTopColor: person.color, borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>finding today's question…</span>
              </div>
            ) : (
              <p style={{ margin: 0, fontSize: "19px", lineHeight: "1.65", color: "rgba(255,255,255,0.92)", fontStyle: "italic", letterSpacing: "-0.01em" }}>"{question}"</p>
            )}
            <div style={{ fontSize: "10px", letterSpacing: "0.15em", color: `${person.color}55`, textTransform: "uppercase" }}>{qMoodLabel} · today's question</div>
          </div>

          {question && !loading && (
            <div style={{ animation: "fadeIn 0.4s ease" }}>
              {/* Answer tabs */}
              <div style={{ display: "flex", marginBottom: "12px", background: "rgba(255,255,255,0.04)", borderRadius: "12px", padding: "4px" }}>
                <button className="ans-tab" onClick={() => setViewingAnswer(user)} style={{ flex: 1, padding: "9px 8px", borderRadius: "8px", border: "none", fontFamily: "Georgia, serif", fontSize: "14px", background: viewingAnswer === user ? `${person.color}22` : "transparent", color: viewingAnswer === user ? person.color : "rgba(255,255,255,0.3)" }}>
                  {person.emoji} My Answer
                </button>
                <button className="ans-tab" onClick={() => setViewingAnswer(other)} style={{ flex: 1, padding: "9px 8px", borderRadius: "8px", border: "none", fontFamily: "Georgia, serif", fontSize: "14px", background: viewingAnswer === other ? `${otherPerson.color}22` : "transparent", color: viewingAnswer === other ? otherPerson.color : "rgba(255,255,255,0.3)" }}>
                  {otherPerson.emoji} {other}'s
                </button>
              </div>

              {viewingAnswer === user ? (
                <>
                  <textarea rows={4} placeholder={`Share your honest answer, ${user}…`} value={answers[user]} onChange={e => handleAnswerChange(e.target.value)} />
                  <button className="save-btn" onClick={handleSave} disabled={!answers[user]} style={{ marginTop: "12px", width: "100%", padding: "14px", borderRadius: "12px", border: `0.5px solid ${person.color}55`, background: saved ? `${person.color}22` : `${person.color}14`, color: person.color, fontSize: "15px", fontFamily: "Georgia, serif", cursor: answers[user] ? "pointer" : "not-allowed", opacity: answers[user] ? 1 : 0.5, letterSpacing: "0.02em", animation: saved ? "pop 0.3s ease" : "none" }}>
                    {saved ? "Saved to Journal ✓" : "Save to Journal ♡"}
                  </button>
                </>
              ) : (
                <div style={{ background: `${otherPerson.color}0d`, border: `0.5px solid ${otherPerson.color}33`, borderRadius: "12px", padding: "18px 16px", minHeight: "90px", display: "flex", alignItems: answers[other] ? "flex-start" : "center", justifyContent: answers[other] ? "flex-start" : "center" }}>
                  {answers[other]
                    ? <p style={{ margin: 0, fontSize: "15px", color: otherPerson.color, lineHeight: "1.7", fontStyle: "italic" }}>{answers[other]}</p>
                    : <p style={{ margin: 0, fontSize: "14px", color: `${otherPerson.color}55`, fontStyle: "italic", textAlign: "center" }}>{other} hasn't answered yet… check back soon 💫</p>}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── JOURNAL ── */}
      {view === "journal" && (
        <div style={{ position: "relative", zIndex: 1, maxWidth: "520px", margin: "0 auto", padding: "20px 20px 0", animation: "fadeIn 0.4s ease" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "10px 16px", marginBottom: "18px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "15px" }}>👁</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>Both you and {other} can see all answers here</span>
          </div>

          {journal.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>📖</div>
              No saved questions yet.<br />Answer today's to start your journal!
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {journal.map(entry => (
                <div key={entry.id} style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "18px", padding: "20px", animation: "fadeIn 0.3s ease" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em" }}>{entry.date}</span>
                    <span style={{ fontSize: "12px", color: "rgba(255,200,180,0.6)" }}>{entry.mood}</span>
                  </div>
                  <p style={{ margin: "0 0 14px", fontSize: "16px", fontStyle: "italic", color: "rgba(255,255,255,0.82)", lineHeight: "1.65" }}>"{entry.question}"</p>
                  <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {["Akash", "Anumaa"].map(name => {
                      const p = PEOPLE[name];
                      return (
                        <div key={name}>
                          <div style={{ fontSize: "11px", color: `${p.color}bb`, marginBottom: "5px", display: "flex", alignItems: "center", gap: "5px" }}>
                            <span>{p.emoji}</span><span style={{ letterSpacing: "0.08em" }}>{name}</span>
                          </div>
                          {entry.answers[name]
                            ? <p style={{ margin: 0, fontSize: "14px", color: `${p.color}ee`, lineHeight: "1.65" }}>{entry.answers[name]}</p>
                            : <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.38)", fontStyle: "italic" }}>hasn't answered yet…</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {/* ── TOASTS ── */}
      <div style={{ position: "fixed", bottom: "24px", left: "50%", transform: "translateX(-50%)", zIndex: 999, display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", pointerEvents: "none", width: "calc(100% - 40px)", maxWidth: "420px" }}>
        {toasts.map(t => (
          <div key={t.id} style={{ background: "rgba(20,16,32,0.97)", border: `0.5px solid ${t.color}55`, borderRadius: "14px", padding: "12px 18px", display: "flex", alignItems: "center", gap: "10px", boxShadow: `0 4px 32px rgba(0,0,0,0.5), 0 0 16px ${t.color}22`, animation: "toastIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards", width: "100%", boxSizing: "border-box" }}>
            <span style={{ fontSize: "20px", flexShrink: 0 }}>{t.emoji}</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.88)", lineHeight: "1.5", fontFamily: "Georgia, serif" }}>{t.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
