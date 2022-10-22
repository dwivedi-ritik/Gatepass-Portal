A Portal for managing Gatepass and maintenances 

## Why 
- it can save lot of time of students as well as Admin
- it can track all the students records

## Todos
- [ ] One Page to see all the Details about Gatepass and maintenaces
- [ ] Rechart js Area Chart [ on Test-Chart Branch ]

## Done
- [x] Dropdown in Side nav of admin panel 
- [x] Responsive table 
- [x] Modal of view details in Gatepass table  


## Known Bugs
- Downloaded files does't add empty string on empty entries
- Side Nav is wiggling on mobile devices 


Description of all the Implemented APIs


Gate Pass APIs

- `api/gatepass/add` [POST]
- `api/gatepass/getByToken` [GET]
- `api/gatepass/getExcelSheet?status={status}` [GET]** 
- `api/gatepass/getPassCount` [ GET ]
- `api/gatepass/getRequestsInYear`	[ GET ]
- `api/gatepass/sendMail` [POST]

Subscription APIs

- `api/subscription/add` [ POST ]
- `api/subscription/sendNotification?token={tokenId}&status={status}` [ GET ]

Maintenance APIs

- `api/maintenance/add` [ POST ]
- `api/maintenance/changeStatus` [ POST ]
- `api/maintenance/deleteByToken` [ POST ]
- `api/maintenance/getDashboard` [ GET ]
- `api/maintenance/getResolved` [ GET ]
- `api/maintenance/getUnresolved` [ GET ]
- `api/maintenance/getExcelSheet?status={status}`[GET]**

| Symbol |  Task|
|--|--|
| `*` | `Buggy` |
| `**` | `Not Implemented` 
| `?` | `Buggy` |

