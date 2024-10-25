// app/ui/fonts.ts
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

// Если вы хотите добавить Lusitana, убедитесь, что он импортирован
import { Lusitana } from 'next/font/google';

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400'],
});

export { inter, lusitana }; // Экспортируйте оба шрифта