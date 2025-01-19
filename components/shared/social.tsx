import { TooltipProvider } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import {
  FaGithub,
  FaLinkedin,
  FaSlack,
  FaYoutube,
  FaFacebook,
} from 'react-icons/fa';
import Link from 'next/link';

type SocialProps = {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
};

const socialLink = [
  {
    title: 'Youtube',
    href: 'https://www.youtube.com',
    icon: <FaYoutube className='w-5 h-5' />,
  },
  {
    title: 'Github',
    href: 'https://www.github.com',
    icon: <FaGithub className='w-5 h-5' />,
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com',
    icon: <FaLinkedin className='w-5 h-5' />,
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com',
    icon: <FaFacebook className='w-5 h-5' />,
  },
  {
    title: 'Slack',
    href: 'https://www.slack.com',
    icon: <FaSlack className='w-5 h-5' />,
  },
];

export default function Social({
  className,
  iconClassName,
  tooltipClassName,
}: SocialProps) {
  return (
    <TooltipProvider>
      <div className={cn('flex items-center gap-4', className)}>
        {socialLink.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                  'p-1.5 text-gray-400 hover:text-white hover-effect',
                  iconClassName
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                'text-xs bg-gray-300 text-maestroDark font-semibold rounded-lg p-1.5 py-1',
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
