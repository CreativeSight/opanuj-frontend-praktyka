import {z} from 'zod';

export const FormSchema = z.object({
  origin: 
    z.string()
    .min(1, {
      message: 'Lokalizacja początkowa jest wymagana',
    })
    .max(100, {
      message: 'Nazwa lokalizacji początkowej nie może przekraczać 100 znaków',
    }),
  destination: 
    z.string()
    .min(1, {
      message: 'Lokalizacja docelowa jest wymagana',
    })
    .max(100, {
      message: 'Nazwa lokalizacji docelowej nie może przekraczać 100 znaków',
    }),
  trip: z.enum(['one-way', 'round-trip']),
  startDate: z.string().regex(/^\d{2}-\d{2}-\d{4}$/, {
    message: "Nieprawidłowy format daty. Oczekiwany format: DD-MM-YYYY",
  }),
  endDate: z.string().optional(),
})
.superRefine((val, ctx) => {
  if (val.trip === 'round-trip') {
    if (val.endDate === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Data powrotu jest wymagana',
        path: ['endDate'],
      })
    }

    if (val.endDate && !val.endDate.match(/^\d{2}-\d{2}-\d{4}$/)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Nieprawidłowy format daty. Oczekiwany format: DD-MM-YYYY',  
        path: ['endDate'],
      })
    }
  }
});

export type FormValues = z.infer<typeof FormSchema>;  