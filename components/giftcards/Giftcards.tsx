'use client';

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
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldGroup,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '../ui/button';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function Giftcards() {
  const [giftData, setGiftData] = useState({
    amount: '1000',
    from: '',
    to: '',
    message: '',
    uniqueCode: 'GFT-TEST-PREVIEW-123',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setGiftData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAmountChange = (value: string) => {
    setGiftData((prev) => ({ ...prev, amount: value }));
  };

  return (
    <section className={styles.giftcards}>
      <div className={styles.leftSide}>
        <p className={styles.sectionTitle}>Подарункова карта</p>
        <Field className={styles.giftcardsBlock}>
          <FieldLabel className={styles.giftLabel} htmlFor="amount">
            Виберіть суму подарункової карти
          </FieldLabel>
          <Select
            onValueChange={handleAmountChange}
            defaultValue={giftData.amount}
          >
            <SelectTrigger id="amount" className={styles.selectTrigger}>
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
        </Field>

        <Field className={styles.giftcardsBlock}>
          <FieldLabel className={styles.giftLabel} htmlFor="to">
            Кому
          </FieldLabel>
          <Input
            className={styles.input}
            id="to"
            type="text"
            name="to"
            value={giftData.to}
            onChange={handleInputChange}
            placeholder="Введіть отримувача карти"
          />
        </Field>

        <Field className={styles.giftcardsBlock}>
          <FieldLabel className={styles.giftLabel} htmlFor="from">
            Від кого
          </FieldLabel>
          <Input
            className={styles.input}
            id="from"
            type="text"
            name="from"
            value={giftData.from}
            onChange={handleInputChange}
            placeholder="Введіть дарувальника карти"
          />
        </Field>

        <FieldSet className={styles.giftcardsBlock}>
          <FieldGroup>
            <Field>
              <FieldLabel className={styles.giftLabel} htmlFor="message">
                Повідомлення
              </FieldLabel>
              <Textarea
                className={styles.textarea}
                id="message"
                placeholder="Введіть повідомлення..."
                name="message"
                value={giftData.message}
                onChange={handleInputChange}
                rows={10}
              />
              <FieldDescription>
                Напишіть повідомлення для того, кому даруєте карту (за
                бажанням).
              </FieldDescription>
            </Field>
          </FieldGroup>
          <Button className={styles.giftcardsBtn}>Відправити</Button>
        </FieldSet>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.sectionTitle}>Превью</div>
        <div className="relative w-125 h-75 p-8 rounded-2xl shadow-xl text-white flex flex-col justify-between overflow-hidden">
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
            }}
          />
          {/* Верх */}
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-sm font-medium opacity-80">
                Подарункова Карта
              </p>
              <p className="text-4xl font-extrabold tracking-tight mt-1">
                {giftData.amount} грн.
              </p>
            </div>
          </div>

          {/* Середина */}
          <div className="relative z-10 space-y-2">
            <p className="text-sm">
              <span className="font-semibold opacity-80">Кому:</span>
              {giftData.to || '...'}
            </p>
            <p className="text-sm">
              <span className="font-semibold opacity-80">Від кого:</span>
              {giftData.from || '...'}
            </p>
            <p className="text-sm italic mt-2">
              "{giftData.message || 'Ваше повідомлення...'}"
            </p>
          </div>

          {/* Низ */}
          <div className="relative z-10 flex justify-between items-end mt-4 border-t border-white/20 pt-4">
            <div className="text-xs space-y-1">
              <p className="font-mono text-white/70">Код підтвердження:</p>
              <p className="font-mono font-bold bg-white/10 px-2 py-0.5 rounded">
                {giftData.uniqueCode}
              </p>
            </div>

            {/* QR-код */}
            <div className="bg-white p-2 rounded-lg shadow-inner">
              <QRCodeSVG
                value={giftData.uniqueCode}
                size={60}
                level={'H'}
                marginSize={2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
