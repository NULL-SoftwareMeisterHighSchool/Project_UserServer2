export class CreateArticleResponseDto {
  public readonly articleID: number;

  public static of(articleID: number): CreateArticleResponseDto {
    return {
      articleID,
    };
  }
}
