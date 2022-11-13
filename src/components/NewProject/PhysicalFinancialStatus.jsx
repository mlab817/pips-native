import {Box} from 'native-base';
import React from 'react';
import DateContainer from '../DateContainer';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import SelectContainer from '../SelectContainer';
import TextAreaContainer from '../TextAreaContainer';
import {options} from '../../constants/options';

export default function PhysicalFinancialStatus() {
  return (
    <Box flex={1} mt={3}>
      <FormItem>
        <FormLabel label="Project Status" />

        <SelectContainer
          placeholder="Project Status"
          options={options.project_statuses}
        />
      </FormItem>

      <FormItem>
        <FormLabel label="Category" />

        <SelectContainer placeholder="Category" options={options.categories} />
      </FormItem>

      <FormItem>
        <FormLabel label="Start of Project Implementation" />

        <SelectContainer placeholder="Start of Project Implementation" />
      </FormItem>

      <FormItem>
        <FormLabel label="Year of Project Completion" />

        <SelectContainer placeholder="Year of Project Completion" />
      </FormItem>

      <FormItem>
        <FormLabel label="Level of Readiness" />

        <SelectContainer
          placeholder="Level of Readiness"
          options={options.readiness_levels}
        />
      </FormItem>

      <FormItem>
        <FormLabel label="Updates" />

        <TextAreaContainer placeholder="Updates" />
      </FormItem>

      <FormItem>
        <FormLabel label="As of" />

        <DateContainer />
      </FormItem>
    </Box>
  );
}
