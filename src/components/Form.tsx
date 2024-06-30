import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export function Form() {
  return (
    <Card className='md:w-[350px] shadow-shadow border-none outline-none'>
      <CardHeader>
        <CardTitle className='text-primary text-center'>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-2 gap-6'>
          <Button variant='outline'>
            <FaGithub className='mr-2 h-4 w-4' />
            Github
          </Button>
          <Button variant='outline'>
            <FcGoogle className='mr-2 h-4 w-4' />
            Google
          </Button>
        </div>
        <div className='relative my-4'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>
              Or continue with
            </span>
          </div>
        </div>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' placeholder='' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex flex-col'>
        <CardDescription className='cursor-pointer'>
          <Link to='/forgotPassword' className='text-clr-blue'>
            Forgot Password?
          </Link>
        </CardDescription>
        <Button className='w-full cursor-pointer'>Login</Button>
        <CardDescription className='mt-4'>
          Not a member yet?{' '}
          <Link to='/register' className='text-clr-blue'>
            Register
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
