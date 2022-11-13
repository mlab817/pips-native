import {Box} from 'native-base';
import React from 'react';
import {SectionTitle} from '../../screens/NewProjectScreen';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import SelectContainer from '../SelectContainer';
import {options} from '../../constants/options';

export default function FundingInformation() {
  return (
    <Box flex={1}>
      <SectionTitle title="Funding Source & Mode of Implementation" />

      <FormItem>
        <FormLabel label="Main Funding Source" />

        <SelectContainer
          placeholder="Main Funding Source"
          options={options.funding_sources}
        />
      </FormItem>
    </Box>
  );
}
