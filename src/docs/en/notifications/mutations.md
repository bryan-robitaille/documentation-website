---
path: "/notifications/mutations"
subnav: "1/Notifications/Notifications/4"
lang: "en"
title: "Modifying Data"
---

<helmet>
<title> Notifications - Modifying Data</title>
</helmet>

## Mutations

Mutations require authentication in the form of the user's valid GCaccount access token.  The access token must be passed in the request header in the form `Authorization: Bearer {access token}`.

### Notification mutations

#### Create a Notification

Available arguments to send in a mutation:

* `appID` *application id as identified in GCaccount* (string)
* `actionLink` *url to page where notification can be actioned* (string)
* `actionLevel` *enum list of either `NoUserAction`, `Featured`, or `UserActionRequired`* (enum)
* `email` *email notification object* (email notification object)
* `online` *online notification object* (online notification object)
* `whoDunIt` *object that defines who or what generated the event* (whoDunIt object)

Example mutation to create a Notification with both and online and email component:

```javascript
    mutation{
        createNotification(
            appID:"651368451sasedf",
            actionLink:"https://app.somewhere.ca/89413268416",
            actionLevel: "UserActionRequired",
            email:{
                from:"noreply.somewhere.ca",
                to:"user@somewhere.com",
                subject:"You really need to action this",
                body:"Something that you really neeed to do",
                html: False
            },
            online:{
                titleEn: "Something you need to do",
                titleFr: "Quelque chose que vous devez faire",
                descriptionEn: "You really need to action this as soon as possible",
                descriptionFr: "Vous devez vraiment agir dès que possible"                
            },
            whoDunIt:{
                teamID: "861a3sdf6815asdf"
            }
         ){
             id,
             online{
                 viewed
             }
         }
    }
```

#### Modify a Notification

Available arguments to send in a mutation:

* `id` *unique identifier of the team to modify* (int)
* `online` *online notification object* (online notification object)

Example mutation to modify a Notification

```javascript
    mutation{
        updateNotification(
            id:2,
            online:{
                viewed: True
            }
        ){
            id,
            online,
            viewed
        }
    }
```
