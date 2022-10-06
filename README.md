## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Description of all the Implemented APIs

# Gate Pass APIs

- `api/gatepass/add` [POST]
- `api/gatepass/getByToken` [GET]
- `api/gatepass/getExcelSheet` [GET] 
- `api/gatepass/getPassCount` [ GET ]
- `api/gatepass/getRequestsInYear`	[ GET ]
- `api/gatepass/sendMail` [POST]

# Subscription
- `api/subscription/add` [ POST ]
- `api/subscription/sendNotification?token={tokenId}&status={status}` [ GET ]

# Maintenance APIs

- `api/maintenance/add` [ POST ]
- `api/maintenance/changeStatus` [ POST ]
- `api/maintenance/getDashboard` [ GET ]
- `api/maintenance/getResolved` [ GET ]
- `api/maintenance/getUnresolved` [ GET ]
- `api/maintenance/getExcelSheetOfUnresolved`[GET] **



# Special Cases
| Symbol |  Task|
|--|--|
| `*` | `Buggy` |
| `**` | `Not Implemented` 
| `?` | `Buggy` |

