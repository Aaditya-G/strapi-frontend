export interface GetFoods {
    foods: {
      data: Array<{
        id: string;
        attributes: {
          name: string;
        };
      }>;
      meta: {
        pagination: {
          page: number;
          pageSize: number;
          total: number;
          pageCount: number;
        };
      };
    };
  }