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
            } else {
                notFound(req, res);
            }
        });
    });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
