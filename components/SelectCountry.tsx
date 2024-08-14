import { getCountries } from '@/lib/data-service';
import { CountryType } from '@/utils/types';

type Props = {
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
};

export default async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}: Props) {
  const countries = await getCountries();
  const flag =
    countries.find((country: CountryType) => country.name === defaultCountry)
      ?.flag ?? '';

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c: CountryType) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
