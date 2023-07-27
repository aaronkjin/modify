# Modify
A full-stack Spotify clone website with full audio upload/playback and Stripe integration

<img width="1000" alt="Screen Shot 2023-07-07 at 3 38 33 PM" src="https://github.com/aaronkjin/modify/assets/58490258/bd7f14f9-4f72-461d-a963-d42632bf1224">

### Link to website

[Modify Website](https://modify-project.vercel.app/)

### Background and Inspiration

Say I'm not at my desk where I may be studying for an upcoming exam or building a personal project. Then, you'll most likely come across me _either_ playing the oboe _or_ listening to music with Airpods on. As an avid music-listening enjoyer with 80,000+ minutes listened to on Spotify last year as well as being a musician myself, I thought that building a Spotify clone web application would shed a bit more light into who I am as an individual. Because, after all, I do love music. 

Thus, I built Modify, a full-stack Spotify clone application that allows users to upload and play songs of their choice, "like" their favorite songs to put into a "Liked Songs" playlist, pay for Premium features through Stripe (albeit, with imaginary credit card information), and many, many more features. Modify replicates many of Spotify's core features, both basic and advanced.

### Details and Features

- Technologies used: TypeScript, React, Next, Tailwind, Stripe, Supabase, and PostgreSQL.
- Song upload
- Play song audio
- Favorites system
- Playlists / Liked Songs system
- Advanced Player component
- A sleek, seamless UI with animations and transition effects using Tailwind
- Credential authentication using Supabase
- GitHub authentication integration
- File and image upload using Supabase storage
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- APP/API exposure with writing POST, GET, and DELETE routes in route handlers
- Direct access of the database to fetch data in server React components (without the use of APIs)
- Handling of relations between Server and Child components in a real-time environment
- Integration of recurring payments and cancellation of subscriptions using Stripe
- Full responsiveness for all devices

**If you want to try the site for yourself:**
1. Click the link above.
2. Look around the site a bit. You'll notice that, prior to being able to do anything, you'll need to sign up or log in. Let's start off by doing that.
3. By attempting to play any song or clicking the "Account" icon on the top right, you can sign up through your email or GitHub account. You should receive an email as a confirmation link.
4. Upon signing up, you are logged in! Feel free to browse around the site to view its features.
5. Now, you'll also quickly realize that most of the functional, actually useful features of the site requires you to be on the Modify Premium plan. Fear not, this "premium" plan is actually **free**! I simply wanted to integrate Stripe to give off the _fake_ feeling of there being premium features in order to replicate how a SaaS business might operate.
6. Once again, attempt to play any song or click on the "Account" icon on the top right (the "Account" page will tell you that you are currently not subscribed to any plan). You will then be navigated to the Subscriptions page.
7. When signing up for Premium through Stripe, I will remind you once again that this _does not_ require you to actually spend any money - it is all part of the demo. Feel free to enter your _fake_ credit card information as well as any _fake_ personal information. Don't worry, I won't be stealing any of your data (whether it be fake or not) because all data is encrypted and secure through Supabase.
**Example:** Card #: 4242 4242 4242 4242 / MONTH/YEAR: 04/24 / CVV: 424 / Address: 4242 Patrice Rd, Newport Beach, CA 92663 / Phone #: (111) 111-1111
8. Congratulations! Upon signing up for Modify Premium, you have access to all of the site's features - hooray!
9. You'll notice that you can listen to any songs now. Give the songs in the "Newest Songs" category a try first! "Newest Songs" store a collective of _all_ the users' uploaded songs.
10. To upload your own song, click the "+" by the "Your Library" component. This allows you to upload any MP3 and image file of your choice. Once you upload your own song, you'll see it in the "Your Library" section, and it will also be uploaded in "Newest Songs" for any and all other users to hear as well - how cool is that?
11. Play around with the features! You can favorite, search for, and play/pause the song of your choice, adjust volume, + so much more!

### Notes

Modern-day Spotify acts as a hub for any and all songs you can think of. My site acts as a much smaller hub; users who upload their songs provide themselves, along with users, access to these songs. However, other songs that have not been uploaded yet cannot be "found" in Modify. Therefore, Modify acts as one's personal music file organizer along with an explorer of being able to dabble with other Modify users' music tastes. The next thing I want to do is to incorporate Spotify's API so that Modify feels much grander in scope. It was a blast making this Spotify clone website, and I'm already thinking of ways I can improve to be even better than it is now!

By: Aaron Jin

Main GitHub Profile link: https://github.com/aaronkjin

