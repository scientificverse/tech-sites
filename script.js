const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const twitterBtn = document.getElementById('twitter-btn');

// Array of quotes
const localQuotes = [
    { text: "Success is not final; failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "It is better to fail in originality than to succeed in imitation.", author: "Herman Melville" },
    { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.", author: "Dale Carnegie" },
    { text: "Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan ’Press On’ has solved and always will solve the problems of the human race.", author: "Calvin Coolidge" },
    { text: "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.", author: "Mister Rogers" },
    { text: "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.", author: "John Wooden" },
    { text: "I never dreamed about success. I worked for it.", author: "Estée Lauder" },
    { text: "Success is getting what you want; happiness is wanting what you get.", author: "W. P. Kinsella" },
    { text: "It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid instead of trying to be very intelligent.", author: "Charlie Munger" },
    { text: "You can’t be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.", author: "Tina Fey" },
    { text: "When I believe in something, I’m like a dog with a bone.", author: "Melissa McCarthy" },
    { text: "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.", author: "Anaïs Nin" },
    { text: "The standard you walk past is the standard you accept.", author: "David Hurley" },
    { text: "I’ve searched all the parks in all the cities and found no statues of committees.", author: "Gilbert K. Chesterton" },
    { text: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "Keep your eyes on the stars and your feet on the ground.", author: "Theodore Roosevelt" },
    { text: "Do not stop thinking of life as an adventure. You have no security unless you can live bravely, excitingly, imaginatively; unless you can choose a challenge instead of competence.", author: "Eleanor Roosevelt" },
    { text: "Perfection is not attainable. But if we chase perfection we can catch excellence.", author: "Vince Lombardi" },
    { text: "Get a good idea and stay with it. Dog it, and work at it until it’s done right.", author: "Walt Disney" },
    { text: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.", author: "Helen Keller" },
    { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.", author: "Unknown" },
    { text: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.", author: "Steve Jobs" },
    { text: "Experience is a hard teacher because she gives the test first, the lesson afterward.", author: "Vernon Sanders Law" },
    { text: "To know how much there is to know is the beginning of learning to live.", author: "Dorothy West" },
    { text: "Goal setting is the secret to a compelling future.", author: "Tony Robbins" },
    { text: "We must be willing to get rid of the life we’ve planned, so as to have the life that is waiting for us.", author: "Joseph Campbell" },
    { text: "Concentrate all your thoughts upon the work in hand. The sun’s rays do not burn until brought to a focus.", author: "Alexander Graham Bell" },
    { text: "Either you run the day or the day runs you.", author: "Jim Rohn" },
    { text: "I’m a great believer in luck, and I find the harder I work, the more I have of it.", author: "Thomas Jefferson" },
    { text: "When we strive to become better than we are, everything around us becomes better too.", author: "Paulo Coelho" },
    { text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.", author: "Thomas Edison" },
    { text: "Setting goals is the first step in turning the invisible into the visible.", author: "Tony Robbins" },
    { text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.", author: "Steve Jobs" },
    { text: "Women challenge the status quo because we are never it.", author: "Cindy Gallop" },
    { text: "We don’t just sit around and wait for other people. We just make, and we do.", author: "Arlan Hamilton" },
    { text: "Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.", author: "Oprah Winfrey" },
    { text: "The strongest actions for a woman is to love herself, be herself and shine amongst those who never believed she could.", author: "Unknown" },
    { text: "Whenever you see a successful woman, look out for three men who are going out of their way to try to block her.", author: "Yulia Tymoshenko" },
    { text: "Some women choose to follow men, and some choose to follow their dreams. If you’re wondering which way to go, remember that your career will never wake up and tell you that it doesn’t love you anymore.", author: "Lady Gaga" },
    { text: "The thing women have yet to learn is nobody gives you power. You just take it.", author: "Roseanne Barr" },
    { text: "If they don’t give you a seat at the table, bring a folding chair.", author: "Shirley Chisholm" },
    { text: "I raise up my voice—not so that I can shout, but so that those without a voice can be heard. … We cannot all succeed when half of us are held back.", author: "Malala Yousafzai" },
    { text: "When a woman becomes her own best friend, life is easier.", author: "Diane Von Furstenberg" },
    { text: "If you want something said, ask a man; if you want something done, ask a woman.", author: "Margaret Thatcher" },
    { text: "We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women’s voices are heard and heeded, not overlooked and ignored.", author: "Sheryl Sandberg" },
    { text: "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.", author: "Madeleine Albright" },
    { text: "Women must learn to play the game as men do.", author: "Eleanor Roosevelt" },
    { text: "I swear, by my life and my love of it, that I will never live for the sake of another man, nor ask another man to live for mine.", author: "Ayn Rand" },
    { text: "He who conquers himself is the mightiest warrior.", author: "Confucius" },
    { text: "Try not to become a man of success, but rather become a man of value.", author: "Albert Einstein" },
    { text: "One man with courage makes a majority.", author: "Andrew Jackson" },
    { text: "One secret of success in life is for a man to be ready for his opportunity when it comes.", author: "Benjamin Disraeli" },
    { text: "A man who has committed a mistake and doesn’t correct it is committing another mistake.", author: "Confucius Kongzi" },
    { text: "The successful man will profit from his mistakes and try again in a different way.", author: "Dale Carnegie" },
    { text: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.", author: "David Brinkley" },
    { text: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.", author: "Epictetus" },
    { text: "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.", author: "George Lorimer" },
    { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
    { text: "The most difficult thing is the decision to act; the rest is merely tenacity.", author: "Amelia Earhart" },
    { text: "You’ll find that education is just about the only thing lying around loose in this world, and it’s about the only thing a fellow can have as much of as he’s willing to haul away.", author: "John Graham" },
    { text: "Take the attitude of a student: never be too big to ask questions, never know too much to learn something new.", author: "Augustine Og Mandino" },
    { text: "Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it. … Once you learn that, you’ll never be the same again.", author: "Steve Jobs" },
    { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
    { text: "What you do speaks so loudly that I cannot hear what you say.", author: "Ralph Waldo Emerson" },
    { text: "I have never let my schooling interfere with my education.", author: "Mark Twain" },
    { text: "If you can’t yet do great things, do small things in a great way.", author: "Napoleon Hill" },
    { text: "If you really want to do something, you’ll find a way. If you don’t, you’ll find an excuse.", author: "Jim Rohn" },
    { text: "Be sure you put your feet in the right place, then stand firm.", author: "Abraham Lincoln" },
    { text: "Live out of your imagination, not your history.", author: "Stephen Covey" },
    { text: "Do not wait for the perfect time and place to enter, for you are already onstage.", author: "Unknown" },
    { text: "The greater the difficulty, the more the glory in surmounting it.", author: "Epicurus" },
    { text: "Courage doesn’t always roar. Sometimes courage is a quiet voice at the end of the day saying, ‘I will try again tomorrow.’", author: "Mary Anne Radmacher" },
    { text: "If the decisions you make about where you invest your blood, sweat, and tears are not consistent with the person you aspire to be, you’ll never become that person.", author: "Clayton M. Christensen" },
    { text: "The greatest discovery of my generation is that a human being can alter his life by altering his attitudes.", author: "William James" },
    { text: "One of the differences between some successful and unsuccessful people is that one group is full of doers, while the other is full of wishers.", author: "Edmond Mbiaka" },
    { text: "I’d rather regret the things I’ve done than regret the things I haven’t done.", author: "Lucille Ball" },
    { text: "You cannot plow a field by turning it over in your mind. To begin, begin.", author: "Gordon B. Hinckley" },
    { text: "When you arise in the morning, think of what a privilege it is to be alive, to think, to enjoy, to love.", author: "Marcus Aurelius" },
    { text: "Mondays offer new beginnings 52 times a year!", author: "David Dweck" },
    { text: "Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.", author: "Wayne Dyer" },
    { text: "Your Monday morning thoughts set the tone for your whole week. See yourself getting stronger, and living a fulfilling, happier, and healthier life.", author: "Germany Kent" },
    { text: "Friday sees more smiles than any other day of the workweek!", author: "Kate Summers" },
    { text: "Oh! It’s Friday again. Share the love that was missing during the week. In a worthy moment of peace and bliss.", author: "S. O’Sade" },
    { text: "Every Friday, I like to high-five myself for getting through another week on little more than caffeine, willpower, and inappropriate humor.", author: "Nanea Hoffman" },
    { text: "Make a Friday a day to celebrate work well done that you can be proud of, knowing that you just didn’t put in time to the next paycheck.", author: "Byron Pulsifer" },
    { text: "When you leave work on Friday, leave work. Don’t let technology follow you throughout your weekend (answering text messages and emails). Take a break. You will be more refreshed to begin the workweek if you have had a break.", author: "Catherine Pulsifer" },
    { text: "You can get everything in life you want if you will just help enough other people get what they want.", author: "Zig Ziglar" },
    { text: "Inspiration does exist, but it must find you working.", author: "Pablo Picasso" },
    { text: "Don’t settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.", author: "Angela Bassett" },
    { text: "Show up, show up, show up, and after a while the muse shows up, too.", author: "Isabel Allende" },
    { text: "Don’t bunt. Aim out of the ballpark. Aim for the company of immortals.", author: "David Ogilvy" },
    { text: "I have stood on a mountain of no’s for one yes.", author: "Barbara Elaine Smith" },
    { text: "The most common way people give up their power is by thinking they don’t have any.", author: "Alice Walker" },
    { text: "Power’s not given to you. You have to take it.", author: "Beyoncé" },
    { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
    { text: "You have power over your mind —not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "The greatest weapon against stress is our ability to choose one thought over another.", author: "William James" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "It’s not whether you get knocked down; it’s whether you get up.", author: "Vince Lombardi" },
    { text: "With great power comes great responsibility.", author: "Stan Lee" },
    { text: "We cannot solve problems with the kind of thinking we employed when we came up with them.", author: "Albert Einstein" },
    { text: "Learn as if you will live forever, live like you will die tomorrow.", author: "Mahatma Gandhi" },
    { text: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.", author: "Mark Twain" },
    { text: "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.", author: "Eleanor Roosevelt" },
    { text: "When you change your thoughts, remember to also change your world.", author: "Norman Vincent Peale" },
    { text: "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.", author: "Walter Anderson" },
    { text: "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.", author: "Diane McLaren" },
    { text: "The elevator to success is out of order. You’ll have to use the stairs, one step at a time.", author: "Joe Girard" },
    { text: "Be a positive energy trampoline —absorb what you need and rebound more back.", author: "Dave Carolan" },
    { text: "People often say that motivation doesn’t last. Well, neither does bathing—that’s why we recommend it daily.", author: "Zig Ziglar" },
    { text: "Work until your bank account looks like a phone number.", author: "Unknown" },
    { text: "I am so clever that sometimes I don’t understand a single word of what I am saying.", author: "Oscar Wilde" },
    { text: "People say nothing is impossible, but I do nothing every day.", author: "Winnie the Pooh" },
    { text: "Life is like a sewer … what you get out of it depends on what you put into it.", author: "Tom Lehrer" },
    { text: "I always wanted to be somebody, but now I realize I should have been more specific.", author: "Lily Tomlin" },
    { text: "Talent wins games, but teamwork and intelligence win championships.", author: "Michael Jordan" },
    { text: "Individual commitment to a group effort—that is what makes a team work, a company work, a society work, a civilization work.", author: "Vince Lombardi" },
    { text: "Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.", author: "Andrew Carnegie" },
    { text: "Coming together is a beginning. Keeping together is progress. Working together is success.", author: "Henry Ford" },
    { text: "Alone we can do so little, together we can do so much.", author: "Helen Keller" },
    { text: "Remember, teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability.", author: "Patrick Lencioni" },
    { text: "I invite everyone to choose forgiveness rather than division, teamwork over personal ambition.", author: "Jean-Francois Cope" },
    { text: "Just one small positive thought in the morning can change your whole day.", author: "Dalai Lama" },
    { text: "Opportunities don’t happen, you create them.", author: "Chris Grosser" },
    { text: "Love your family, work super hard, live your passion.", author: "Gary Vaynerchuk" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "Don’t let someone else’s opinion of you become your reality.", author: "Les Brown" },
    { text: "If you’re not positive energy, you’re negative energy.", author: "Mark Cuban" },
    { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen R. Covey" },
    { text: "Do the best you can. No one can do more than that.", author: "John Wooden" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
];

// Show New Quote
function newQuote() {
    // Pick a random quote from localQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // Hide current quote to trigger fade out
    quoteText.classList.remove('show');
    quoteAuthor.classList.remove('show');

    // Wait for fade out to complete, then update and fade in
    setTimeout(() => {
        // Check if Author field is blank and replace it with 'Unknown'
        if (!quote.author) {
            quoteAuthor.textContent = 'Unknown';
        } else {
            quoteAuthor.textContent = quote.author;
        }

        // Check Quote length to determine styling
        if (quote.text.length > 100) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }

        quoteText.textContent = quote.text;

        // Trigger fade in
        quoteText.classList.add('show');
        quoteAuthor.classList.add('show');
    }, 500); // 500ms matches the CSS transition time
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
newQuote();
