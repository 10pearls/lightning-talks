export function generateNotificationPayload  (_title, _description, _speakers, _date, _gifLink) {
     return {
        "attachments": [
            {
                "fallback": "@channel, we have another *'Lightning Talk'* coming up on Monday.\n*Title: * When Designers and Developers Work together\n*Description: * The session appreciates designers and developers collaborate on project from the very start helping them to break the wall between both for seamless and better deliverable for the clients. Helping both create trusting partnership and work in a harmony.\n*Speaker(s): * Muhammad Ali Siddiqui\n*Date: * Tuesday, 12th February\n*Time: * 12:40 sharp (literally)\n*Venue: * 10Pearls University Auditorium",
                "color": "warning",
                "fields": [
                    {
                        "title": "",
                        "value": "@channel, we have a :zap: *'Lightning Talk'* :zap: on Tuesday.",
                        "short": false
                    },
                    {
                        "title": "Title",
                        "value": _title,
                        "short": false
                    },
                    {
                        "title": "Description",
                        "value": _description,
                        "short": false
                    },
                    {
                        "title": "Speaker(s)",
                        "value": _speakers,
                        "short": true
                    },
                    {
                        "title": "Date",
                        "value": _date,
                        "short": true
                    },
                    {
                        "title": "Venue",
                        "value": "10Pearls University Auditorium",
                        "short": true
                    },
                    {
                        "title": "Time",
                        "value": "12:40 sharp (literally)",
                        "short": true
                    }
                ]
            },
            {
                "fallback": "https://thumbs.gfycat.com/MintyBlissfulElectriceel-size_restricted.gif",
                "color": "warning",
                "image_url": _gifLink,
            },
            {
                "fallback": "You can sign up for your very own Lightning Talk, follow the Talks schedule, or give feedback at http://lightningtalks.10pearls.com",
                "color": "warning",
                "fields": [
                    {
                        "title": "You can sign up for your very own Lightning Talk or follow the Talks schedule",
                        "value": "",
                        "short": false
                    }
                ],
                "actions": [
                    {
                        "type": "button",
                        "style": "primary",
                        "text": "Sign up for Lightning Talk",
                        "url": "http://wiki.10pearls.com:8181/view/LightningTalks/#HCallforProposals"
                    },
                    {
                        "type": "button",
                        "style": "default",
                        "text": "Check the Lightning Calendar",
                        "url": "http://wiki.10pearls.com:8181/view/LightningTalks/#HTalks"
                    },
                    {
                        "type": "button",
                        "style": "danger",
                        "text": "Give a Lightning feedback",
                        "url": "https://goo.gl/forms/CuQ3IfSUiQ0uYek03"
                    }
                ]
            }
        ]
    }
}