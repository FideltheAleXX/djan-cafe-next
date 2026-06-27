import styles from './Giftcards.module.css';
import { amounts } from '../../src/amounts';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Giftcards() {
  return (
    <section className={styles.giftcards}>
      <Select>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue placeholder="Виберіть сумму" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Amounts</SelectLabel>
            {amounts.map((amount) => (
              <SelectItem key={amount.value} value={amount.value}>
                {amount.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>Кому</div>
      <div>Від кого</div>
      <div>Повідомлення</div>
    </section>
  );
}
