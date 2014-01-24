live-coding-with-meteor
=======================

Using github diffs for live coding example of a simple meteor app

## Prep

* Run hostname once on the wifi to get whatever DHCP set
* run
```
meteor create live-coding-with-meteor
```
* cd into the new app folder and run 
```
meteor
```
* now run through the diffs
* Log into https://dev.twitter.com/apps/new to get API keys for this app (remember to set callback as below)


## Things to cover
1. Once (if!) the app is working make sure that the callback URL is set to whatever hostname the DHCP has given the MacBook!
2. Get eveyone else to go to the app (hostname:3000)
3. And login with their Twitter ID
4. Make sure they pay attention to *my* screen
5. Tell them that the app has a MongoDB store, and that's where this info is being put.
6. But also that the client has a *copy* of this MongoDB (it's called MiniMongo)
7. When you make changes on the client, these are saved to the client copy of the database
8. So you see your changes immediately (no lag)
9. Eventually (very very quickly) the data syncs with the backend's database
10. This gets sent out to all other clients
11. Using WebSockets - so there's no polling
12. Also has a form of routing
13. The templating engine is SpaceBars - an extension of HandleBars
14. The server is actually node under the hood
15. You can deploy to meteor.com, heroku or your own servers
16. At the moment, by default it is in dev mode which means your *entire* database is in the client
17. You can lock this down and create Publications and Subscriptions - datapoints available to the client, API-like calls to these datapoints