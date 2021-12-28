import { Validator } from 'class-validator';
import { CreateWorldsDto } from './create-worlds.dto';

describe('create WorldsDto', () => {
  it('nameWorld should not be empty', async () => {
    const validator = new Validator();
    const createWorldsDto = new CreateWorldsDto();
    createWorldsDto.name_world = '';
    createWorldsDto.description = '';
    createWorldsDto.founding_company = '';
    createWorldsDto.picture_world = '';
    createWorldsDto.icon_world = '';
    createWorldsDto.banner_world = '';
    createWorldsDto.video_world = '';
    createWorldsDto.status_world = '';
    createWorldsDto.counter_views_world = 0;

    const invalid = await validator.validate(createWorldsDto);
    expect(invalid.length).toBe(1);
    expect(invalid[0].property).toBe('name_world');
  });
});
