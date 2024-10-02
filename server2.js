import { createServer } from 'http';

const PORT = process.env.PORT || 3000;
const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com'
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@gmail.com'
    },
    {
        id: 3,
        name: 'John Smith',
        email: 'johnsmith@gmail.com'
    },
    {
        id: 4,
        name: 'Jane Smith',
        email: 'janesmith@gmail.com'
    }
];

// Logger Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// JSON Middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
};

// Route handler for GET /api/users
const getUsers = (req, res) => {
    res.statusCode = 200;
    res.write(JSON.stringify(users));
    res.end();
};

//Route handler for POST /api/users
// const createUser = (req, res) => {
//     let body = '';
//     req.on('data', (chunk) => {
//         body += chunk.toString();
//     });
//     req.on('end', () => {
//         const newUser = JSON.parse()
//         users.push(newUser);
//         res.statusCode = 201;
//         res.write(JSON.stringify(newUser));
//         res.end();
//     })

//     // const { name, email } = req.body;
//     // if (!name || !email) {
//     //     res.statusCode = 400;
//     //     res.write(JSON.stringify({ message: 'Name and email are required' }));
//     //     res.end();
//     // } else {
//     //     const newUser = {
//     //         id: users.length + 1,
//     //         name,
//     //         email
//     //     };
//     //     users.push(newUser);
//     //     res.statusCode = 201;
//     //     res.write(JSON.stringify(newUser));
//     //     res.end();
//     // }
// };


const createUser = (req, res) => {
    parseRequestBody(req, newUser => {
        // Add the new user to the array
        newUser.id = users.length + 1;
        users.push(newUser);

        // Log the new user
        console.log('User created:', newUser);

        // Send response
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    });
};

// Not Found Middleware
const notFound = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end();
};



const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsers(req, res);
            }else if (req.url === '/api/user' && req.method === 'POST') {
                createUser(req, res);
            } else {
                notFound(req, res);
            }
        });
    });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
