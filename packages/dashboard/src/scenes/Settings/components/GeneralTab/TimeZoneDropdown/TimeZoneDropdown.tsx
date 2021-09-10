import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown, DropdownItem } from '@components/Dropdown';

import timezoneOptions from './timezoneOptions';
import { selectTimezone } from '@redux/selectors/settings';
import { setTimezone } from '@redux/actions/settings';

const getTimezoneName = (value: string) => {
  return timezoneOptions.find((option) => option.value === value)?.name;
};

const TimeZoneDropdown = () => {
  const dispatch = useDispatch();
  const timezone = useSelector(selectTimezone);
  const { t } = useTranslation();

  return (
    <Dropdown
      label={t('scene.Settings.AppSettings.Timezone.label')}
      selected={getTimezoneName(timezone)}
    >
      {timezoneOptions.map((option) => (
        <DropdownItem
          key={option.id}
          option={option}
          onClick={() => dispatch(setTimezone(option.value))}
        />
      ))}
    </Dropdown>
  );
};

export default TimeZoneDropdown;
