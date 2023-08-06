# Modify
A full-stack Spotify clone website with full audio upload/playback and Stripe integration

<img width="1000" alt="Screen Shot 2023-07-07 at 3 38 33 PM" src="https://github.com/aaronkjin/modify/assets/58490258/bd7f14f9-4f72-461d-a963-d42632bf1224">

### Link to website

Come see it for yourself!

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

### Instructions

1. Click the link above.
2. Sign up or log in.
    1. Credential authentication is required before being able to use the application.
    2. To sign up:
        1. By attempting to play any song _or_ clicking the "Account" icon at the top right, you can sign up through your email or Github account.
        2. You should receive an email with a confirmation link when doing so.
    3. To log in:
        1. Similarly, you can log in with your email or Github account by attempting to play any song _or_ clicking the "Account" icon at the top right.
3. Upon logging in, feel free to browse around the site to view its features.
    1. You'll soon realize that most of the functional features of the site requires you to be on the Modify Premium plan.
    2. Fear not, this "premium" plan is actually free!
    3. I simply wanted to integrate Stripe to mimic the feeling there being premium features in order to replicate how a SaaS business might operate.
4. To subscribe to Modify Premium, attempt to play any song _or_ click on the "Account" icon at the top right.
    1. There, click the "Subscribe" button to be navigated to the Subscriptions page built with Stripe.
5. On the Subscriptions page, once again, don't worry! You don't need to actually spend any money as I incorporated Stripe as part of the demo.
    1. Feel free to enter fake information for the subscription: both for the credit card as well as for personal information.
    2. Don't worry, I won't be stealing any of your data (whether it's fake or not) because all data is encrypted and secured through Supabase.
    3. Example:
        1. Credit Card #: 4242 4242 4242 4242
        2. Credit Card Month/Year: 04/24
        3. CVV: 424
        4. Address: 4242 Patrice Rd, Newport Beach, CA 92663
        5. Phone #: (111) 111-1111
6. Now, upon signing up for Modify Premium, you have access to all the site's features - hooray!
    1. Now, you can listen to any songs.
    2. First, give the songs in the "Newest Songs" category a listen. "Newest Songs" stores a collection of all the users' uploaded songs.
7. To upload your own song, click the "+" by the "Your Library" component.
    1. This allows you to upload any MP3 and image file of your choice.
    2. Once you upload your own song, you'll see it in the "Your Library" section, and it will also be uploaded in "Newest Songs" for any and all other users to listen to as well.
8. Play around with the rest of the features!
    1. You can favorite, search for, and play/pause the song of your choice, adjust volume, + so much more!

### Notes

Modern-day Spotify acts as a hub for any and all songs you can think of. My site acts as a much smaller hub; users who upload their songs provide themselves, along with users, access to these songs. However, other songs that have not been uploaded yet cannot be "found" in Modify. Therefore, Modify acts as one's personal music file organizer along with an explorer of being able to dabble with other Modify users' music tastes. The next thing I want to do is to incorporate Spotify's API so that Modify feels much grander in scope. It was a blast making this Spotify clone website, and I'm already thinking of ways I can improve to be even better than it is now!

By: Aaron Jin

Main GitHub Profile link: https://github.com/aaronkjin

