import { requiredUser } from '@/hooks/required-user';

export default async function OrdersPage() {
  await requiredUser();

  return <div>OrdersPage</div>;
}
