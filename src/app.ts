import express, {Application, Request, Response} from 'express';

// create new Express app
const app: Application = express();

const me = (req: Request, res: Response) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Me</h1>');
    res.write('<p>I am a student at Georgian College studying Interactive Media Design.</p>');
    res.end();
}

const food = (req: Request, res: Response) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Food</h1>');
    res.write('<p>My favourite foods are: pizza, celery cream soup, tomato soup, onion soup, and butternut squash soup</P>');
    res.end();
}

const hobbies = (req: Request, res: Response) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hobbies</h1>');
    res.write('<p>My hobbies are: playing guitar, drawing, and snowboarding</p>');
    res.end();
}

// url
app.use('/me', me );
app.use('/food', food);
app.use('/hobbies', hobbies);

// start express server
app.listen(4000, () => {console.log('Express running on port 4000')})