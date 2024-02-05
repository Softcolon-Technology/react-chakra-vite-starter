import { ImUser } from 'react-icons/im';
import { Icon } from '@chakra-ui/react';
import { GrProjects } from 'react-icons/gr';
import { FaHome, FaUserFriends, FaFileContract } from 'react-icons/fa';

export interface INavItem {
  id: number;
  icon?: any;
  path: string;
  label: string;
}

export const NAV_ITEMS: Array<INavItem> = [
  {
    id: 1,
    icon: (color: string) => <Icon as={FaHome} w={4} h={4} color={color} />,
    path: '/dashboard',
    label: 'home',
  },
  {
    id: 2,
    icon: (color: string) => <Icon as={FaFileContract} w={4} h={4} color={color} />,
    path: '/contract',
    label: 'contract.Contract',
  },
  {
    id: 3,
    icon: (color: string) => <Icon as={FaUserFriends} w={4} h={4} color={color} />,

    path: '/suppliers',
    label: 'supplier.title',
  },
  {
    id: 4,
    icon: (color: string) => <Icon as={ImUser} w={4} h={4} color={color} />,

    path: '/users',
    label: 'users',
  },
  {
    id: 5,
    icon: (color: string) => <Icon as={GrProjects} w={4} h={4} color={color} />,

    path: '/project',
    label: 'common.project',
  },
];

export const MASTER_ADMIN_NAV_ITEMS: Array<INavItem> = [
  {
    id: 1,
    path: '/master-admin/occupation/tab',
    label: 'occupation',
  },
  {
    id: 2,
    path: '/master-admin/qualification',
    label: 'qualification',
  },
  {
    id: 3,
    path: '/master-admin/category',
    label: 'category',
  },
  {
    id: 4,
    path: '/master-admin/manager',
    label: 'manager',
  },
];

export interface OccupationPages {
  id: number;
  href: string;
  label: string;
}

export const tabs: Array<OccupationPages> = [
  {
    id: 1,
    href: '/tab',
    label: 'tab',
  },
  {
    id: 2,
    href: '/group',
    label: 'group',
  },
  {
    id: 3,
    href: '/job',
    label: 'job',
  },
];
